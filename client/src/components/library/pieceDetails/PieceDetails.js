import { Fragment } from 'react';
import styles from './PieceDetails.module.css';

const PieceDetails = ({ piece }) => {
  const { composerlast, composerfirst, title } = piece;

  const displayName = composerfirst ? `${composerlast}, ${composerfirst}` : composerlast;
  return (
    <Fragment>
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.composerDiv}>
        <h2 className={styles.composerH2} >{displayName}</h2>
      </div>
    </Fragment>
  );
};

export default PieceDetails;
