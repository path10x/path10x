//typesscript you have to import, not require
import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return;
});

router.post('/', (req: Request, res: Response) => {
  return;
});

router.put('/:id', (req: Request, res: Response) => {
  return;
});

router.delete('/:id', (req: Request, res: Response) => {
  return;
});

module.exports = router;
