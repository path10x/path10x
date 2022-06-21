import { Request, Response, NextFunction } from 'express';
const db = require('../models/AlgorithmModel.ts');

interface ExpressMiddleware {
  req: Request;
  res: Response;
  next: NextFunction;
}

export const algorithmController = {
  getUserAlgorithms: async ({ req, res, next }: ExpressMiddleware) => {
    try {
      const userID = req.params.user;
      const SQLQuery = `
      GET * FROM "public.UserAlgorithms"
      WHERE user_id=$1
      `;
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
