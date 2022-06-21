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
      console.log(userID);
      const SQLQuery = `
      SELECT * FROM "public.UserAlgorithms"
      WHERE user_id=$1;
      `;
      console.log(SQLQuery);
      const response = await db.query(SQLQuery, [userID]);
      res.locals = response.rows;
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
