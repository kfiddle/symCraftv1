const db = require('../dbConnection/elephantConnect');

const piecesController = {};

piecesController.getPieces = async (req, res, next) => {
  const queryString = 'SELECT * FROM Piece';

  try {
    const reply = await db.query(queryString);
    res.locals.pieces = reply.rows;
    return next();
  } catch (err) {
    return next({
      log: 'error retrieving pieces from piecesController.getPieces',
      status: 500,
      message: { err: 'Unable to list pieces' },
    });
  }
};

piecesController.addPieces = async (req, res, next) => {
  console.log(req.body);
  // try {
  //   const { pieces } = req.body;
  //   console.log(pieces);

  //   // const reply = await db.query(queryString);
  //   // res.locals.pieces = reply.rows;
  //   return next();
  // } catch (err) {
  //   return next({
  //     log: 'error adding pieces in piecesController.addPieces',
  //     status: 500,
  //     message: { err: 'Unable to add pieces' },
  //   });
  // }
};

module.exports = piecesController;
