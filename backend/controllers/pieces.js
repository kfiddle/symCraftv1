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
  // const newPieces = req.body.pieces;
  let newPieces = [{ composerLast: 'Szigeti', title: 'Zikiller'}];

  try {
    for (let piece of newPieces) {
      const vals = [];
      let insertString = `INSERT INTO Piece (`;
      let valString = ` VALUES (`;

      let index = 1;
      let keyVals = Object.entries(piece);
      for (let j = 0; j < keyVals.length; j++) {
        let key = keyVals[j][0];
        let val = keyVals[j][1];

        if (val) {
          vals.push(val);

          if (j === keyVals.length - 1) {
            insertString += key + ')';
            valString += ')';
            insertString += insertString + valString;
          } else {
            insertString += key + ', ';
            valString += '$' + index + ', ';
            index++;
          }
        }
      }

      console.log(insertString)
      await db.query(insertString, vals);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = piecesController;
