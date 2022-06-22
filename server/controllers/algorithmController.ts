import { Request, Response, NextFunction, RequestHandler } from 'express';
const db = require('../models/AlgorithmModel.ts');

interface ExpressMiddleware {
  req: Request;
  res: Response;
  next: NextFunction;
}

type AlgorithmController = {
  getUserAlgorithms: RequestHandler;
};

const algorithmController: AlgorithmController = {
  getUserAlgorithms: async (req, res, next) => {
    try {
      const userID = req.params.user;
      const SQLQuery = `
        SELECT *, company.name as company_name, algos.name as algorithm_name from "public.UserAlgorithms" as useralgos
        JOIN "public.Algorithms" as algos 
          ON useralgos.algo_id = algos.algo_id
        JOIN "public.CompanyAlgorithms" as companyalgos
          ON algos.algo_id = companyalgos.algo_id
        JOIN "public.Companies" as company
          ON companyalgos.company_id = company.company_id
        WHERE user_id=$1
      `;
      const response = await db.query(SQLQuery, [userID]);

      const responseReducer = (response: any) => {
        // object to store algo_id:arrayOfCompanies. To be inserted into reduced object
        const algoCompanyList: any = {};

        // turn large list into just single object per algorithm while filling out company arrays
        const reducedResponseMinusCompanyList = response.rows.reduce(
          (acc: any, curr: any) => {
            // add algo object if not in result
            if (!(curr.algo_id in acc)) acc[curr.algo_id] = curr;
            // add company array if not in algoCompanyList
            if (!(curr.algo_id in algoCompanyList))
              algoCompanyList[curr.algo_id] = [curr.company_name];
            else algoCompanyList[curr.algo_id].push(curr.company_name);

            return acc;
          },
          {}
        );

        const algoList: Object[] = [];
        for (const key in reducedResponseMinusCompanyList) {
          // delete company name, company id property
          delete reducedResponseMinusCompanyList[key].company_name;
          delete reducedResponseMinusCompanyList[key].company_id;
          // add company arrays to each algorithm
          reducedResponseMinusCompanyList[key].companies =
            algoCompanyList[reducedResponseMinusCompanyList[key].algo_id];
          algoList.push(reducedResponseMinusCompanyList[key]);
        }

        return algoList;
      };

      res.locals = responseReducer(response);
      return next();
    } catch (err) {
      return next({
        log: 'error occurred in algorithmController.getUserAlgorithms',
        status: 400,
        message: { err },
      });
    }
  },
};

module.exports = algorithmController;

// SELECT * from "public.UserAlgorithms" as useralgos
// JOIN "public.Algorithms" as algos
// ON useralgos.algo_id = algos.algo_id
// JOIN "public.CompanyAlgorithms" as companyalgos
// ON algos.algo_id = companyalgos.algo_id
// JOIN "public.Companies" as company
// ON companyalgos.company_id = company.company_id
// WHERE user_id=1

// SELECT * from "public.UserAlgorithms" as useralgos
//         JOIN "public.Algorithms" as algos
//         ON useralgos.algo_id = algos.algo_id
//         WHERE user_id=$1
