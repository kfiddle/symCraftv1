import { Fragment } from 'react';
import styles from './PieceDetails.module.css';

const PieceDetails = ({ piece }) => {
  const {
    prefix = '',
    libnumber = '',
    suffix = '',
    composerlast,
    composerfirst = '',
    arranger = '',
    title,
    othername = '',
    publisher = '',
    duration = '',
    percbreakdown = '',
    notes = '',
    status = '',
    sign = '',
    updated = '',
    instrumentation = '',
    vocalist_soloists = '',
  } = piece;

  const displayName = composerfirst ? `${composerlast}, ${composerfirst}` : composerlast;
  return (
    <Fragment className={styles.outerFrag}>
      <div className={styles.titleDiv}>{title}</div>
      <div>{othername}</div>
      <div className={styles.composerDiv}>
        <h2 className={styles.composerH2}>{displayName}</h2>
      </div>
      <div className={styles.publisherDiv}>{publisher}</div>
      <div className={styles.prefixDiv}>{prefix} {libnumber}</div>
      <div className={styles.arrangerDiv}>{arranger}</div>
      <div className={styles.notesDiv}>{notes}</div>
      <div className={styles.percbreakdownDiv}>{percbreakdown}</div>
      <div className={styles.vocalist_soloistsDiv}>{vocalist_soloists}</div>
      <div className={styles.instrumentationDiv}>{instrumentation}</div>
      <div className={styles.updatedDiv}>{updated}</div>
      <div className={styles.statusDiv}>{status}</div>
      <div className={styles.durationDiv}>{duration}</div>
    </Fragment>
  );
};

export default PieceDetails;
