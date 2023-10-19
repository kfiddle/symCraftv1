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
      log:'error retrieving pieces from piecesController.getPieces',
      status: 500,
      message: { err: 'Unable to list pieces'}
    })
  }
};

module.exports = piecesController;
