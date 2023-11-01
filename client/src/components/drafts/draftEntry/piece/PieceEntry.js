import { useState } from 'react';

import usePostRequest from '../../../../hooks/usePostRequest';

import Input from '../../../../UI/input/Input';
import SubmitButton from '../../../../UI/submitButton/SubmitButton';
import LibraryUploader from './LibraryUploader';

import styles from './Piece.module.css';
import Modal from '../../../../UI/modal/Modal';

const PieceEntry = ({ closeModal }) => {
  const [pieceDetails, setPieceDetails] = useState({});

  const inputHandler = (key) => (e) => setPieceDetails({ ...pieceDetails, [key]: e.target.value });

  const { data: success, loading, error, makePostRequest } = usePostRequest('pieces');

  const submitPiece = async () => makePostRequest(pieceDetails);

  return (
      <div>
        {/* <LibraryUploader /> */}
        <Input placeholder={'title'} onChangeHandler={inputHandler('title')} />
        <Input placeholder={'composerLast'} onChangeHandler={inputHandler('composerLast')} />
        <Input placeholder={'composerFirst'} onChangeHandler={inputHandler('composerFirst')} />
        <Input placeholder={'prefix'} onChangeHandler={inputHandler('prefix')} />
        <Input placeholder={'libNumber'} onChangeHandler={inputHandler('libNumber')} />
        <Input placeholder={'suffix'} onChangeHandler={inputHandler('suffix')} />
        <Input placeholder={'arranger'} onChangeHandler={inputHandler('arranger')} />
        <Input placeholder={'otherName'} onChangeHandler={inputHandler('otherName')} />
        <Input placeholder={'publisher'} onChangeHandler={inputHandler('publisher')} />
        <Input placeholder={'duration'} onChangeHandler={inputHandler('duration')} />
        <Input placeholder={'instrumentation'} onChangeHandler={inputHandler('instrumentation')} />
        <Input placeholder={'windsBrass'} onChangeHandler={inputHandler('windsBrass')} />
        <Input placeholder={'vocalistSoloist'} onChangeHandler={inputHandler('vocalistSoloist')} />
        <Input placeholder={'percBreakdown'} onChangeHandler={inputHandler('percBreakdown')} />
        <Input placeholder={'notes'} onChangeHandler={inputHandler('notes')} />
        <Input placeholder={'status'} onChangeHandler={inputHandler('status')} />
        <Input placeholder={'sign'} onChangeHandler={inputHandler('sign')} />
        <Input placeholder={'updated'} onChangeHandler={inputHandler('updated')} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <SubmitButton submitFunc={submitPiece} />
        </div>
      </div>
  );
};

export default PieceEntry;
