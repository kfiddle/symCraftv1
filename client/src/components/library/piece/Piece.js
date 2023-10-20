import styles from './Piece.module.css';

const Piece = ({ composerLast, title }) => {


  return (
    <div className={styles.outerContainer}>
      {composerLast} {title}
    </div>
  );
};

export default Piece;
