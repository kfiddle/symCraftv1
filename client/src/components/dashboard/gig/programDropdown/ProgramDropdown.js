import { useEffect, useState } from 'react';

import useGetFetch from '../../../../hooks/useGetFetch';

import styles from './ProgramDropdown.module.css';
import DropPiece from './dropPiece/DropPiece';

const ProgramDropdown = ({ gigId }) => {
  const url = process.env.REACT_APP_SERVER + 'pieces/find_by_gig/' + gigId;
  const { data: pieces, loading, error } = useGetFetch(url);
  let displayablePieces = [];

  if (pieces) {
    displayablePieces = pieces.map((piece) => <DropPiece key={piece.id} piece={piece} />);
  }

  return <div>{displayablePieces}</div>;
};

export default ProgramDropdown;
