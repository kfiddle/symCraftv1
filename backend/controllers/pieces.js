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


try {
  // Create a prepared statement for inserting new records

  for (const piece of newPieces) {
    const { value1, value2, value3 } = piece; // Extract values from the request body

    // Execute the insert statement with the provided values
    await db.query(insertQuery, [value1, value2, value3]); // Pass values as an array
  }

piecesController.addPieces = async (req, res, next) => {
  try {
    const newPieces = req.body.pieces;
    const insertQuery = 'INSERT INTO Piece (column1, column2, column3) VALUES ($1, $2, $3)'; // Modify for your table's columns


    // const reply = await db.query(queryString);
    res.locals.pieces = pieces.length;
    return next();
  } catch (err) {
    return next({
      log: 'error adding pieces in piecesController.addPieces',
      status: 500,
      message: { err: 'Unable to add pieces' },
    });
  }
};

module.exports = piecesController;
