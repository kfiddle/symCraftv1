import { useEffect, useState } from 'react';

import Input from '../../UI/input/Input';
import Piece from './piece/Piece';

import styles from './Library.module.css';
import PieceDetails from './pieceDetails/PieceDetails';

const Library = () => {
  const [library, setLibrary] = useState([]);
  const [clickedPiece, setClickedPiece] = useState({});

  useEffect(() => {
    const grabPieces = async () => {
      const response = await fetch('http://localhost:3000/pieces');
      if (response.ok) {
        let jsonified = await response.json();
        setLibrary(jsonified);
      }
    };

    grabPieces();
  }, []);

  const clickedPieceHandler = async (pieceId) => {
    console.log(pieceId);

    try {
      const response = await fetch(`http://localhost:3000/pieces/${pieceId}`);
      const jsonified = await response.json();
      setClickedPiece(jsonified);
    } catch (err) {
      console.log(err);
    }
  };

  let displayablePieces =
    library.length > 0
      ? library.map((piece) => (
          <Piece
            key={piece.id}
            id={piece.id}
            composerLast={piece.composerLast}
            title={piece.title}
            clicker={clickedPieceHandler}
            isClicked={piece.id === clickedPiece.id}
          />
        ))
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
