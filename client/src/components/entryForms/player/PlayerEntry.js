import { useState } from 'react';
import Modal from '../../../UI/modal/Modal';
import Input from '../../../UI/input/Input';

import fetchPost from '../../../utils/fetchPost';

import styles from './PlayerEntry.module.css';
import SubmitButton from '../../../UI/submitButton/SubmitButton';
import InstEntryBox from './InstEntryBox';

const PlayerEntry = ({ closeModal }) => {
  const [playerDeets, setPlayerDeets] = useState({});
  const [numOfInsts, setNumOfInsts] = useState(1);
  const [playerInstIds, setPlayerInstIds] = useState([]);

  const deetsHandler = (inputType) => (e) => {
    setPlayerDeets({ ...playerDeets, [inputType]: e.target.value });
  };

  const submitPlayer = async (e) => {
    e.preventDefault();
    console.log(playerDeets)
    const playerToSend = { ...playerDeets, insts: playerInstIds };
    const response = await fetchPost('players', playerToSend);
    if (response === 'success') setPlayerDeets({});
    else if (response === 'failed') console.log('failed to save player data');
  };

  const additionalInstInputs = [];
  for (let j = 0; j < numOfInsts; j++) {
    additionalInstInputs.push(<InstEntryBox key={j} index={j} setPlayerInstIds={setPlayerInstIds} setNumOfInsts={setNumOfInsts} />);
  }

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        {/* <h3>New Player</h3> */}
        <div className={styles.nameInstsDiv}>
          <div className={styles.name}>
            <label>First Name</label>
            <Input onChangeHandler={deetsHandler('first')} />

            <label>Last Name</label>
            <Input onChangeHandler={deetsHandler('last')} />
          </div>

          <div>{additionalInstInputs}</div>
        </div>
        <div className={styles.emailPhone}>
          <label>Email</label>
          <Input onChangeHandler={deetsHandler('email')} />
          <label>Phone</label>
          <Input />
        </div>
        <label>Address Line 1</label>
        <Input onChangeHandler={deetsHandler('addressLine1')} /> <label>Address Line 2</label>
        <Input onChangeHandler={deetsHandler('addressLine2')} /> <label>City</label>
        <Input onChangeHandler={deetsHandler('city')} /> <label>State</label>
        <Input onChangeHandler={deetsHandler('state')} /> <label>Zip</label>
        <Input onChangeHandler={deetsHandler('zip')} />
        <SubmitButton submitFunc={submitPlayer} />
      </div>
    </Modal>
  );
};

export default PlayerEntry;
