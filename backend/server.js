const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const instRoutes = require('./routes/inst-routes');
const piecesRoutes = require('./routes/pieces');

app.use("/insts", instRoutes);

app.use(bodyParser.json());
app.use(cors());

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

const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log(`listening gooooood on port:${port}`));

mongoose
  .connect(
    "mongodb+srv://kenjon:kenjonsmythe@cluster0.d2aep6g.mongodb.net/symcraft?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => console.log(err));
