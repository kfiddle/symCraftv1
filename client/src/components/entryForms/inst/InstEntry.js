import Input from '../../../UI/input/Input';
import SubmitButton from '../../../UI/submitButton/SubmitButton';

import { createInst } from '../../../api/makeEntities';

import styles from './Inst.module.css';

const InstEntry = () => {
  const [instDetails, setInstDetails] = useState({});

  const inputHandler = (key) => (e) => setInstDetails({ ...instDetails, [key]: e.target.value });

  const submitInst = async () => {
    const response = await createInst(instDetails);
    if (response === 'success') setPlayerDeets({});
    else if (response === 'failed') console.log('failed to save inst data');
  };

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
