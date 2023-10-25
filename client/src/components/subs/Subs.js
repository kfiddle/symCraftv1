import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import Inst from './inst/Inst';
import Input from '../../UI/input/Input';
import fetchPost from '../../utils/fetchPost';

import SubsOfInst from './subsOfInst/SubsOfInst';

import styles from './Subs.module.css';

const Subs = () => {
  const { allInsts: insts } = useSelector((state) => state.insts);
  const [clickedInst, setClickedInst] = useState(null);
  const [subsOfInst, setSubsOfInst] = useState([]);

  useEffect(() => {
    const getPlayersOfInst = async () => {
      const url = `${process.env.REACT_APP_SERVER}players/inst_id/${clickedInst.id}`
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonified = await response.json();
          setSubsOfInst(jsonified)
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (clickedInst) getPlayersOfInst();
  }, [clickedInst]);

  const clickedInstHandler = (instId) => setClickedInst(insts.find((inst) => inst.id === instId));

  let displayableInsts =
    insts.length > 0
      ? insts.map((inst) => <Inst key={inst.id} inst={inst} clicker={clickedInstHandler} isClicked={inst === clickedInst} />)
      : [];


  // let displayableSubs = [];
  // if (clickedInst) {
  //   if (clickedInst.players) displayableInsts = clickedInst.players.map((player) => <div key={player}>{player}</div>);
  // }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" />
        <div className={styles.instsBox}>{displayableInsts}</div>
      </div>

      <div className={styles.rightBox}>{clickedInst && <SubsOfInst players={subsOfInst} />}</div>
    </div>
  );
};

export default Subs;
