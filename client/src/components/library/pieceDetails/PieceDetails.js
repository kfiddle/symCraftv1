import { Fragment } from 'react';
import styles from './PieceDetails.module.css';

const PieceDetails = ({ piece }) => {
  const {
    id,
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
    vocalistSoloist = '',
  } = piece;

  const displayName = composerfirst ? `${composerlast}, ${composerfirst}` : composerlast;
  return (
    <Fragment>
      <div className={styles.titleDiv}>{title}</div>
      <div>{othername}</div>
      <div>***DRAFT FIELD ONLY id- {id}</div>
      <div className={styles.composerDiv}>
        <h2 className={styles.composerH2}>{displayName}</h2>
      </div>
      <div className={styles.publisherDiv}>{publisher}</div>
      <div className={styles.prefixDiv}>
        {prefix} {libnumber}
      </div>
      <div className={styles.arrangerDiv}>{arranger}</div>
      <div className={styles.notesDiv}>{notes}</div>
      <div className={styles.percbreakdownDiv}>{percbreakdown}</div>
      <div className={styles.vocalist_soloistsDiv}>{vocalistSoloist}</div>
      <div className={styles.instrumentationDiv}>{instrumentation}</div>
      <div className={styles.updatedDiv}>{updated}</div>
      <div className={styles.statusDiv}>{status}</div>
      <div className={styles.durationDiv}>{duration}</div>
      <div className={styles.durationDiv}>{sign}</div>
    </Fragment>
  );
};

export default PieceDetails;
