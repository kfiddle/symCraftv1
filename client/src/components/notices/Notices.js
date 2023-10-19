

import Input from '../../UI/input/Input'

import styles from './Notices.module.css';

const Notices = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        I am some notices
        <Input placeholder="Enter Search Term" />
      </div>
      <div className={styles.rightBox}>
      </div>
    </div>
  );
};

export default Notices;
