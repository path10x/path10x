//typesscript you have to import, not require
import express, { Request, Response } from 'express';
const router = express.Router();
const algorithmController = require('../controllers/algorithmController');
const userController = require('../controllers/userController');

// GET all algorithms with user info attached
router.get(
  '/userAlgorithms/:user',
  algorithmController.getUserAlgorithms,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals);
  }
);

router.get(
  '/user/:user',
  userController.getUser,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals);
  }
);

// );
// algorithmController.getUserAlgorithms,
// (req: Request, res: Response) => {
//   return res.status(200).json(res.locals);
// }

// GET user account info
// router.get('/userInfo/:user', (req: Request, res: Response) => {
//   return res.status(200).send('get testing');
// });

// router.post('/', (req: Request, res: Response) => {
//   return res.status(200).send('post testing');
// });

// router.put('/:id', (req: Request, res: Response) => {
//   return res.status(200).send('update testing');
// });

// router.delete('/:id', (req: Request, res: Response) => {
//   return res.status(200).send('delete testing');
// });

module.exports = router;
