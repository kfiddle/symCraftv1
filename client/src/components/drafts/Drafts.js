import { useState } from 'react';

import Input from '../../UI/input/Input';

import styles from './Drafts.module.css';
import PlayerEntry from './draftEntry/player/PlayerEntry';
import PieceEntry from './draftEntry/piece/PieceEntry';
import InstEntry from './draftEntry/inst/InstEntry';

const entryObj = { players: 'players', insts: 'insts', pieces: 'pieces', gigs: 'gigs' };

const Drafts = () => {
  const [clickedEntry, setClickedEntry] = useState('');

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        {Object.values(entryObj).map((entry) => (
          <h4 onClick={() => setClickedEntry(entry)}>{entry}</h4>
        ))}
      </div>
      <div className={styles.centerBox}>{clickedEntry === 'players' && <PlayerEntry />}</div>
      <div className={styles.centerBox}>{clickedEntry === 'insts' && <InstEntry />}</div>
      <div className={styles.centerBox}>{clickedEntry === 'pieces' && <PieceEntry />}</div>
      {/* <div className={styles.centerBox}>{clickedEntry === 'gigs' && <GigEntry />}</div> */}

      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Drafts;
