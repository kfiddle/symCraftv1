import { Fragment } from 'react';
import Piece from './piece/Piece';

const Pieces = ({ pieces, searchText, clicker, clickedPiece }) => {

  const filteredPieces = searchText ? pieces.filter((pieces) => pieces.name.toLowerCase().includes(searchText.toLowerCase())) : pieces;

  return (
    <Fragment>
      {filteredPieces.map((pieces) => (
        <Piece key={pieces.id} pieces={pieces} clicker={clicker} isClicked={pieces === clickedInst} />
      ))}
    </Fragment>
  );
};

export default Pieces;
