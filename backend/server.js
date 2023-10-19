const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const piecesRoutes = require('./routes/pieces');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/pieces', piecesRoutes);

app.use('*', (req, res, next) => {
  return next({
    log: 'No route configured for this endpoint',
    status: 404,
    message: { err: 'Page not found' },
  });
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json({ message: errorObj.message });
});

app.listen(3000, () => console.log('listening gooooood on port: 3000'));
