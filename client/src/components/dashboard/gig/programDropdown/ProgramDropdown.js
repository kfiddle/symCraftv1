import { useEffect, useState } from 'react';

import useGetList from '../../../../hooks/useGetList';
import DropPiece from './dropPiece/DropPiece';

import styles from './ProgramDropdown.module.css';
const ProgramDropdown = ({ gigId }) => {
  const [pieces, setPieces] = useState([]);
  const [clickedPiece, setClickedPiece] = useState({});

  useEffect(() => {
    const getPieces = async () => {
      try {
        const reply = await fetch(process.env.REACT_APP_SERVER + 'pieces/find_by_gig/' + gigId);
        if (reply.ok) {
          const jsonified = await reply.json();
          setPieces(jsonified);
          console.log(jsonified);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPieces();
  }, []);

  const pieceClicker = async (pieceId) => {
    setClickedPiece(pieces.find((piece) => piece.id === pieceId));
    // we have gigId and number in program
    // console.log(gigId, pieces.indexOf(clickedPiece))
    const pieceNum = pieces.indexOf(clickedPiece) + 1;

    let response = await fetch(`${process.env.REACT_APP_SERVER}chairs/by_gig_and_num?gigId=${gigId}&pieceNum=${pieceNum}` )
    if (response.ok) {
      let jsonified = await response.json();
      console.log(jsonified)
    }
  };

  const displayablePieces =
    pieces.length > 0
      ? pieces.map((piece) => <DropPiece key={piece.id} piece={piece} clicker={pieceClicker} isClicked={piece.id === clickedPiece.id} />)
      : [];

  return <div>{displayablePieces}</div>;
};

export default ProgramDropdown;
