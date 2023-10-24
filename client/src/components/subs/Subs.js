import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import Inst from './inst/Inst';
import Input from '../../UI/input/Input';

import styles from './Subs.module.css';

const Subs = () => {
  const { allInsts: insts } = useSelector((state) => state.insts);

  let displayableInsts = insts.length > 0 ? insts.map((inst) => <Inst key={inst.id} inst={inst} />) : [];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" />
        <div className={styles.instsBox}>{displayableInsts}</div>
      </div>

      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Subs;
