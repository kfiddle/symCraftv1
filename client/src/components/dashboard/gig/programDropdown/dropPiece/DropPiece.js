import styles from './DropPiece.module.css';

const DropPiece = ({ piece, isClicked, clicker }) => {
  const { id, title } = piece;
  const clickHandler = () => clicker(id);

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;

  return (
    <div onClick={clickHandler} className={style}>
      {piece.title}
    </div>
  );
};

export default DropPiece;
