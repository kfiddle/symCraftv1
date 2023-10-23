import { useEffect } from 'react';
import Input from '../../UI/input/Input';

import styles from './Subs.module.css';

const Subs = () => {
  useEffect(() => {
    const getInsts = async () => {
      try {
        const reply = await fetch('http://localhost:3000/insts');
        if (reply.ok) {
          const jsonified = await reply.json();
          console.log(jsonified);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getInsts();
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" />
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Subs;
