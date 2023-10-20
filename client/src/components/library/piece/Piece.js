import styles from './Piece.module.css';

const Piece = ({ id, composerLast, title, clicker, isClicked }) => {

  const clickHandler = () => clicker(id);

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;
  return (
    <div className={style} onClick={clickHandler}>
      {composerLast} {title}
    </div>
  );
};

export default Piece;
