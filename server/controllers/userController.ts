import { Request, Response, NextFunction, RequestHandler } from 'express';
const db = require('../models/AlgorithmModel.ts');

interface ExpressMiddleware {
  req: Request;
  res: Response;
  next: NextFunction;
}

type UserController = {
  getUser: RequestHandler;
};

const userController: UserController = {
  getUser: async (req, res, next) => {
    try {
      const userID = req.params.user;
      const SQLQuery = `
      SELECT * FROM "public.Users"
      WHERE _id=$1
      `;
      const response = await db.query(SQLQuery, [userID]);
      res.locals = response.rows;
      return next();
    } catch (err) {
      return next({
        log: 'error occurred in userController.getUser',
        status: 400,
        message: { err },
      });
    }
  },
};

module.exports = userController;
