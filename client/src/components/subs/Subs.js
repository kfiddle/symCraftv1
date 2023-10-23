import { useState, useEffect, useContext } from 'react';

import Inst from './inst/Inst';
import Input from '../../UI/input/Input';

import generalStore from '../../contextStore/general-store';

import styles from './Subs.module.css';

const Subs = () => {
  const { dashboard, dispatch } = useContext(generalStore);

  let displayableInsts = dashboard.insts.length > 0 ? dashboard.insts.map((inst) => <Inst key={inst.id} inst={inst} />) : [];

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
