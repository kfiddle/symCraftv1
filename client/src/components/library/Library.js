import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Input from '../../UI/input/Input';
import Piece from './piece/Piece';

import styles from './Library.module.css';
import PieceDetails from './pieceDetails/PieceDetails';

const Library = () => {
  const [library, setLibrary] = useState([]);
  const [clickedPiece, setClickedPiece] = useState({});
  const { allPieces: pieces } = useSelector((state) => state.pieces);

  const clickedPieceHandler = (pieceId) => {
    setClickedPiece(pieces.find((piece) => piece.id === pieceId));
  };

  let displayablePieces =
    pieces.length > 0
      ? pieces.map((piece) => <Piece key={piece.id} piece={piece} clicker={clickedPieceHandler} isClicked={piece.id === clickedPiece.id} />)
      : '';

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <div className={styles.inputDiv}>
          <Input placeholder="Enter Search Term" />
        </div>
        <div className={styles.piecesBox}>{displayablePieces}</div>
      </div>
      <div className={styles.rightBox}>{clickedPiece && <PieceDetails piece={clickedPiece} />}</div>
    </div>
  );
};

export default Library;
