//typesscript you have to import, not require
import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).send('get testing');
});

router.post('/', (req: Request, res: Response) => {
  return res.status(200).send('post testing');
});

router.put('/:id', (req: Request, res: Response) => {
  return res.status(200).send('update testing');
});

router.delete('/:id', (req: Request, res: Response) => {
  return res.status(200).send('delete testing');
});

module.exports = router;
