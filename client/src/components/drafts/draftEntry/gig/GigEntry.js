import { useState } from 'react';

import usePostRequest from '../../../../hooks/usePostRequest';

import Input from '../../../../UI/input/Input';
import SubmitButton from '../../../../UI/submitButton/SubmitButton';

import styles from './GigEntry.module.css';

// const gigSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   type: { type: String, enum: ['pops', 'sym', 'outreach'] },
//   program: [{ type: mongoose.Types.ObjectId, ref: 'Piece' }],
//   services: [
//     {
//       type: {
//         type: String,
//         enum: ['rehearsal', 'concert'],
//         required: true,
//       },
//       date: { type: Date, required: true },
//       startTime: { type: String, required: true },
//       endTime: { type: String }, // Optional
//       notes: String,
//       location: String,
//     },
//   ],
// });

const GigEntry = () => {
  const [gigDetails, setGigDetails] = useState({});
  const [program, setProgram] = useState([])

  const inputHandler = (key) => (e) => setGigDetails({ ...gigDetails, [key]: e.target.value });

  const programHandler = (num) => (e) => {
    
  };

  const { data: success, loading, error, makePostRequest } = usePostRequest('gigs');

  const submitGig = async () => makePostRequest(gigDetails);

  return (
    <div>
      <Input placeholder={'title'} onChangeHandler={inputHandler('title')} />
      <Input placeholder={'type'} onChangeHandler={inputHandler('type')} />
      <Input placeholder={'piece 1'} onChangeHandler={programHandler(1)} />
      <Input placeholder={'piece 2'} onChangeHandler={programHandler(2)} />
      <Input placeholder={'piece 3'} onChangeHandler={programHandler(3)} />
      <Input placeholder={'piece 4'} onChangeHandler={programHandler(4)} />
      <Input placeholder={'piece 5'} onChangeHandler={programHandler(5)} />
      <div style={{ borderTop: '2px solid black', marginTop: '1rem' }}></div>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <SubmitButton submitFunc={submitGig} />
      </div>
    </div>
  );
};

export default GigEntry;
