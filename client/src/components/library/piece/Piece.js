import styles from './Piece.module.css';

const Piece = ({ id, composerLast, title, clicker }) => {
  const clickHandler = () => clicker(id);
  return (
    <div className={styles.outerContainer} onClick={clickHandler}>
      {composerLast} {title}
    </div>
  );
};

export default Piece;
