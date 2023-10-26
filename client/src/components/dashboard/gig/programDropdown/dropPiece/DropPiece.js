import styles from './DropPiece.module.css';

const DropPiece = ({ piece, programNum, isClicked, clicker }) => {
  const { id, title } = piece;
  const clickHandler = () => clicker(id, programNum);

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;

  return (
    <div onClick={clickHandler} className={style}>
      {piece.title}
    </div>
  );
};

export default DropPiece;
