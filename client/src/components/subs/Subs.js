
import Input from '../../UI/input/Input';

import styles from './Subs.module.css';

const Subs = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" />
      </div>
      <div className={styles.rightBox}>
      </div>
    </div>
  );

};

export default Subs;