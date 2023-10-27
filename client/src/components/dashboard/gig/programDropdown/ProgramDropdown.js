import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import fetchGet from '../../../../utils/fetchGet';

import generalStore from '../../../../contextStore/general-store';

import DropPiece from './dropPiece/DropPiece';

import styles from './ProgramDropdown.module.css';
const ProgramDropdown = ({ gigId }) => {
  const [pieces, setPieces] = useState([]);
  const [clickedPiece, setClickedPiece] = useState({});
  const { allInsts : insts } = useSelector(state => state.insts)

  const { rosterDispatch } = useContext(generalStore);

  useEffect(() => {
    const getPieces = async () => {
      try {
        const reply = await fetch(process.env.REACT_APP_SERVER + 'pieces/find_by_gig/' + gigId);
        if (reply.ok) {
          const jsonified = await reply.json();
          setPieces(jsonified);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPieces();
  }, []);

  const pieceClicker = async (pieceId, programNum) => {
    setClickedPiece(pieces.find((piece) => piece.id === pieceId));
    let response = await fetchGet(`chairs/by_gig_and_num?gigId=${gigId}&pieceNum=${programNum}`);
    for (let chair of response) {
      let instToFind = insts.find((inst) => inst.id === chair.parts[0].inst);
      console.log(instToFind);
    }
    // if (response !== 'failed') rosterDispatch({ type: 'chairs', chairs: response });
  };

  const displayablePieces =
    pieces.length > 0
      ? pieces.map((piece, index) => (
          <DropPiece key={piece.id} piece={piece} clicker={pieceClicker} isClicked={piece.id === clickedPiece.id} programNum={index + 1} />
        ))
      : [];

  return <div>{displayablePieces}</div>;
};

export default ProgramDropdown;
