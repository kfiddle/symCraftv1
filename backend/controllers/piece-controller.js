const Piece = require('../models/piece');
const HttpError = require('../utils/http-error');

const createPiece = async (req, res, next) => {
  const { title, composerLast } = req.body;

  if (!title || !composerLast) return new HttpError('not enough valid input to save new piece', 500);

  const pieceToCreate = {};
  for (let key in req.body) {
    pieceToCreate[key] = req.body[key];
  }

  try {
    const createdPiece = new Piece(pieceToCreate);
    await createdPiece.save();
    res.status(201).json({ piece: createdPiece.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError('could not create piece', 500));
  }
};

const createPieces = async (req, res, next) => {
  const { pieces } = req.body;
  console.log(pieces)

  try {
    for (let piece of pieces) {
      const pieceToCreate = {};
      for (let key in piece) {
        pieceToCreate[key] = piece[key];
      }
      const createdPiece = new Piece(pieceToCreate);
      await createdPiece.save();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPiece, createPieces };
