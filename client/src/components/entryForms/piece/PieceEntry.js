import Input from '../../../UI/input/Input';
import SubmitButton from '../../../UI/submitButton/SubmitButton';
import { createPiece } from '../../../api/makeEntities';

import styles from './Piece.module.css';


const PieceEntry = () => {
  const [pieceDetails, setPieceDetails] = useState({});

  const inputHandler = (key) => (e) => setPieceDetails({ ...pieceDetails, [key]: e.target.value });

  const submitPiece = async () => {
    const response = await createInst(pieceDetails);
    if (response === 'success') setPieceDetails({});
    else if (response === 'failed') console.log('failed to save piece');
  };
  
  return (
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
    </div>
  );
};

export default PieceEntry;
