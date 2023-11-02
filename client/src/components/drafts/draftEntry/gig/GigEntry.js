import { useState } from 'react';
import { useSelector } from 'react-redux';

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
  const { allPieces: library } = useSelector((state) => state.pieces);

  const [gigDetails, setGigDetails] = useState({});
  const [program, setProgram] = useState([]);
  const [services, setServices] = useState([]);

  const inputHandler = (key) => (e) => setGigDetails({ ...gigDetails, [key]: e.target.value });

  const programHandler = (num) => (e) => {
    const temp = [...program];
    temp[num - 1] = e.target.value;
    setProgram(temp);
  };

  const handleServiceDeets = (num, key) => (e) => {
    const temp = [...services];
    let val = e.target.value;
    if (key === 'type') val = e.target.value === 'r' ? 'rehearsal' : 'concert';
    temp[num - 1] = { ...temp[num - 1], [key]: val };
    setServices(temp);
  };

  const { data: success, loading, error, makePostRequest } = usePostRequest('gigs');

  const submitGig = async () => {
    const programToSubmit = program.map((pieceId) => library.find((p) => pieceId === p.id).id);
    console.log(programToSubmit)
    const gigToSubmit = { ...gigDetails, program: [...programToSubmit], services: [...services] };
    makePostRequest(gigToSubmit);
  };

  if (success) console.log(success);

  // services: [{type: 'rehearsal', date: '11/01/2023', startTime: '7:30pm', endTime: '10:00pm'}]
  // serviceObj: { '1': {type: 'rehearsal', date: '11/01/2023', startTime: '7:30pm', endTime: '10:00pm'} }
  return (
    <div>
      <Input placeholder={'title'} onChangeHandler={inputHandler('title')} />
      <Input placeholder={'type'} onChangeHandler={inputHandler('type')} />
      <Input placeholder={'piece 1 id'} onChangeHandler={programHandler(1)} />
      <Input placeholder={'piece 2 id'} onChangeHandler={programHandler(2)} />
      <Input placeholder={'piece 3 id'} onChangeHandler={programHandler(3)} />
      <Input placeholder={'piece 4 id'} onChangeHandler={programHandler(4)} />
      <Input placeholder={'piece 5 id'} onChangeHandler={programHandler(5)} />
      <div style={{ borderTop: '2px solid black', marginTop: '1rem' }}></div>
      <div>
        <input placeholder="type" onChange={handleServiceDeets(1, 'type')} style={{ width: '3rem' }} />
        <input placeholder="date" onChange={handleServiceDeets(1, 'date')} style={{ width: '7rem' }} />
        <input placeholder="start" onChange={handleServiceDeets(1, 'startTime')} style={{ width: '5rem' }} />
        <input placeholder="end" onChange={handleServiceDeets(1, 'endTime')} style={{ width: '5rem' }} />
      </div>
      <div>
        <input placeholder="type" onChange={handleServiceDeets(2, 'type')} style={{ width: '3rem' }} />
        <input placeholder="date" onChange={handleServiceDeets(2, 'date')} style={{ width: '7rem' }} />
        <input placeholder="start" onChange={handleServiceDeets(2, 'startTime')} style={{ width: '5rem' }} />
        <input placeholder="end" onChange={handleServiceDeets(2, 'endTime')} style={{ width: '5rem' }} />
      </div>
      <div>
        <input placeholder="type" onChange={handleServiceDeets(3, 'type')} style={{ width: '3rem' }} />
        <input placeholder="date" onChange={handleServiceDeets(3, 'date')} style={{ width: '7rem' }} />
        <input placeholder="start" onChange={handleServiceDeets(3, 'startTime')} style={{ width: '5rem' }} />
        <input placeholder="end" onChange={handleServiceDeets(3, 'endTime')} style={{ width: '5rem' }} />
      </div>
      <div>
        <input placeholder="type" onChange={handleServiceDeets(4, 'type')} style={{ width: '3rem' }} />
        <input placeholder="date" onChange={handleServiceDeets(4, 'date')} style={{ width: '7rem' }} />
        <input placeholder="start" onChange={handleServiceDeets(4, 'startTime')} style={{ width: '5rem' }} />
        <input placeholder="end" onChange={handleServiceDeets(4, 'endTime')} style={{ width: '5rem' }} />
      </div>
      <div>
        <input placeholder="type" onChange={handleServiceDeets(5, 'type')} style={{ width: '3rem' }} />
        <input placeholder="date" onChange={handleServiceDeets(5, 'date')} style={{ width: '7rem' }} />
        <input placeholder="start" onChange={handleServiceDeets(5, 'startTime')} style={{ width: '5rem' }} />
        <input placeholder="end" onChange={handleServiceDeets(5, 'endTime')} style={{ width: '5rem' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <SubmitButton submitFunc={submitGig} />
      </div>
    </div>
  );
};

export default GigEntry;
