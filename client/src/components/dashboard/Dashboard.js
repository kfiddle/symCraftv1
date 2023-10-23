import { useState } from 'react';

import styles from './Dashboard.module.css';
import LibraryUploader from '../library/LibraryUploader';

import Input from '../../UI/input/Input';
import SubmitButton from '../../UI/submitButton/SubmitButton';

const Dashboard = () => {
  const [instDetails, setInstDetails] = useState({ name: '', abbreviation: '' });
  const [pieceDetails, setPieceDetails] = useState({});

  const instInputHandler = (type) => (e) => {
    console.log(type);
    if (type === 'name') setInstDetails({ ...instDetails, name: e.target.value });
    else setInstDetails({ ...instDetails, abbreviation: e.target.value });
  };

  const inputHandler = (key) => (e) => setPieceDetails({ ...pieceDetails, [key]: e.target.value });

  const submitInstTester = async () => {
    try {
      const reply = await fetch('http://localhost:3000/insts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(instDetails),
      });
      if (reply.ok) console.log(reply);
    } catch (err) {
      console.log(err);
    }
  };

  const submitPieceTester = async () => {
    try {
      const reply = await fetch('http://localhost:3000/pieces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pieceDetails),
      });
      if (reply.ok) console.log(reply);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div style={{ width: '30%', margin: '5rem' }}>
        <Input placeholder={'instName'} onChangeHandler={instInputHandler('name')} />
        <Input placeholder={'abbreviation'} onChangeHandler={instInputHandler('abbreviation')} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <SubmitButton submitFunc={submitInstTester} />
        </div>
      </div>
      <div style={{ marginTop: '3rem', borderTop: 'solid 2px midnightBlue' }}></div>
      <div>
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
        <Input placeholder={'windsBrass'} onChangeHandler={inputHandler('windsBrass')} />
        <Input placeholder={'vocalistSoloist'} onChangeHandler={inputHandler('vocalistSoloist')} />
        <Input placeholder={'percBreakdown'} onChangeHandler={inputHandler('percBreakdown')} />
        <Input placeholder={'notes'} onChangeHandler={inputHandler('notes')} />
        <Input placeholder={'status'} onChangeHandler={inputHandler('status')} />
        <Input placeholder={'sign'} onChangeHandler={inputHandler('sign')} />
        <Input placeholder={'updated'} onChangeHandler={inputHandler('updated')} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <SubmitButton submitFunc={submitPieceTester} />
        </div>
        <LibraryUploader />
      </div>
    </div>
  );
};

export default Dashboard;
