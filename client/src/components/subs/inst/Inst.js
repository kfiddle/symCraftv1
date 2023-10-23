import styles from './Inst.module.css';

const Inst = ({ inst }) => {
  const { id, name } = inst;

  return <div className={styles.outerContainer}>{name}</div>;
};

export default Inst;
