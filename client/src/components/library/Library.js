

import Input from '../../UI/input/Input'

import styles from './Library.module.css';

const Library = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Search Term" />
      </div>
      <div className={styles.rightBox}>
      </div>
    </div>
  );
};

export default Library;
