import { Fragment } from 'react';

import Sub from './sub/Sub';
import styles from './SubsOfInst.module.css';

const SubsOfInst = ({ players }) => {
  // const displayablePlayers = players.length > 0 ? players.map((player) => <div key={player.id}>{player.last}</div>) : [];
  const displayablePlayers = players.length > 0 ? players.map((player) => <Sub key={player.id} player={player}/>) : [];

  return <Fragment>{displayablePlayers}</Fragment>;
};

export default SubsOfInst;
