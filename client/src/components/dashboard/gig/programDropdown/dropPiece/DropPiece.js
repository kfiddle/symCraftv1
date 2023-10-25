import styles from './DropPiece.module.css';

const DropPiece = ({ piece, isClicked, clicker }) => {
  const { id, title } = piece;
  const clickHandler = () => clicker(id);

  return (
    <div onClick={clickHandler} className={styles.outerContainer}>
      {piece.title}
    </div>
  );
};

export default DropPiece;
