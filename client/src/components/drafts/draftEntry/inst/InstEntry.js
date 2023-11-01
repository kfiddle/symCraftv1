import { useState } from 'react';
import Input from '../../../../UI/input/Input';
import SubmitButton from '../../../../UI/submitButton/SubmitButton';

import usePostRequest from '../../../../hooks/usePostRequest';

import Modal from '../../../../UI/modal/Modal';

import styles from './InstEntry.module.css';

const InstEntry = ( { closeModal }) => {
  const [instDetails, setInstDetails] = useState({});

  const { data: success, loading, error, makePostRequest } = usePostRequest('insts');
  
  const inputHandler = (key) => (e) => setInstDetails({ ...instDetails, [key]: e.target.value });

  const submitInst = async (e) => makePostRequest(instDetails);
  
  return (
      <div>
        <Input placeholder={'name'} onChangeHandler={inputHandler('name')} />
        <Input placeholder={'abbreviation'} onChangeHandler={inputHandler('abbreviation')} />

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <SubmitButton submitFunc={submitInst} />
        </div>
      </div>
  );
};

export default InstEntry;
