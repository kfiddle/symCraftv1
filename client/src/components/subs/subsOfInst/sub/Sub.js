import styles from './Sub.module.css';

const Sub = ({ player, isClicked, clicker }) => {
  const { id, first, last } = player;
  return <div className={styles.outerContainer}>{first} {last}</div>;
};

export default Sub;
