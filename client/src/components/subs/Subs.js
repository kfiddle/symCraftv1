import { useState, useEffect } from 'react';

import Inst from './inst/Inst';
import Input from '../../UI/input/Input';

import styles from './Subs.module.css';

const Subs = () => {
  const [insts, setInsts] = useState([]);

  useEffect(() => {
    const getInsts = async () => {
      try {
        const reply = await fetch('http://localhost:3000/insts');
        if (reply.ok) {
          const jsonified = await reply.json();
          console.log(jsonified);
          setInsts(jsonified);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getInsts();
  }, []);

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
