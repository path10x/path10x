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
      res.locals = response.rows;
      console.log(res.locals);
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
