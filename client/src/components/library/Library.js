import { useEffect, useState } from 'react';

import Input from '../../UI/input/Input';
import Piece from './piece/Piece';

import styles from './Library.module.css';

const Library = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const grabPieces = async () => {
      const response = await fetch('http://localhost:3000/pieces');
      if (response.ok) {
        let jsonifed = await response.json();
        setLibrary(jsonifed);
      }
    };

    grabPieces();
  }, []);

  let displayablePieces =
    library.length > 0 ? library.map((piece) => <Piece key={piece.id} composerLast={piece.composerLast} title={piece.title} />) : '';

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <div>
          <Input placeholder="Enter Search Term" />
        </div>
        <div className={styles.piecesBox}>{displayablePieces}</div>
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Library;
