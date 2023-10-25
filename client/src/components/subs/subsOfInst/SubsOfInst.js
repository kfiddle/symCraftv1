import { Fragment } from 'react';
import styles from './SubsOfInst.module.css';

const SubsOfInst = ({ players }) => {
  const displayablePlayers = players.length > 0 ? players.map((player) => <div key={player.id}>{player.last}</div>) : [];

  return <Fragment>{displayablePlayers}</Fragment>;
};

export default SubsOfInst;
