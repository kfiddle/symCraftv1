import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { instsActions } from '../../redux-store/Insts';
import { piecesActions } from '../../redux-store/Library';
import { gigsActions } from '../../redux-store/gigs';

import useGetList from '../../hooks/useGetList';

import styles from './Dashboard.module.css';
import LibraryUploader from '../library/LibraryUploader';

import Input from '../../UI/input/Input';
import SubmitButton from '../../UI/submitButton/SubmitButton';

const Dashboard = () => {
  const { allGigs: gigs } = useSelector((state) => state.gigs);

  const dispatch = useDispatch();

  const insts = useGetList('insts');
  if (typeof insts === 'object') dispatch(instsActions.refresh(insts))

  const library = useGetList('pieces')
  if (typeof library === 'object') dispatch(piecesActions.refresh(library))

  const gigsResponse = useGetList('gigs')
  if (typeof gigsResponse === 'object') dispatch(gigsActions.refresh(gigsResponse))

  console.log(gigs)

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <div className={styles.inputDiv}>
          <Input placeholder="Enter Search Term" />
        </div>
        <div className={styles.piecesBox}></div>
      </div>
      {/* <div className={styles.rightBox}>{clickedPiece && <PieceDetails piece={clickedPiece} />}</div> */}
    </div>
  );
};

export default Dashboard;
