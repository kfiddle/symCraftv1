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
          console.log(jsonified)
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPieces();
  }, []);

  const pieceClicker = (pieceId) => setClickedPiece(pieces.find((piece) => piece.id === pieceId));

  const displayablePieces =
    pieces.length > 0
      ? pieces.map((piece) => <DropPiece key={piece.id} piece={piece} clicker={pieceClicker} isClicked={piece.id === clickedPiece.id} />)
      : [];

  return <div>{displayablePieces}</div>;
};

export default ProgramDropdown;
