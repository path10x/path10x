import express, { Request, Response, NextFunction } from 'express';
const path = require('path');
const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(__dirname + '/public'));

app.get('/', ((req: Request, res: Response) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
}))

//GLOBAL ERROR HANDLER
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Error from global error handler',
    status: 400,
    message: { err: 'ERROR' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app;