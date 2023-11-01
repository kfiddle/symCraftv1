import { useState, useEffect, useContext } from 'react';
import { Hint } from 'react-autocomplete-hint';
import { useSelector } from 'react-redux';

import Input from '../../../../UI/input/Input';

import styles from './InstEntryBox.module.css';

const InstEntryBox = ({ index, setPlayerInstIds, setNumOfInsts }) => {
  const { allInsts: insts } = useSelector((state) => state.insts);

  const [instName, setInstName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const instOptions = insts.length > 0 ? insts.map((inst) => inst.name) : [];

  const nameFromOnChangeHandler = (event) => {
    setIsValidName(true);
    setInstName(event.target.value);
  };

  const isNameValid = () => {
    if (instName !== '') {
      const instObj = insts.find((inst) => inst.name.includes(instName));
      if (!instObj) {
        setIsValidName(false);
      } else {
        setPlayerInstIds((prevInstIds) => {
          const tempIds = [...prevInstIds];
          tempIds[index] = instObj.id;
          return tempIds;
        });
      }
    }
  };

  const addInstsClicker = () => {
    setNumOfInsts((numOfInsts) => numOfInsts + 1);
  };

  return (
    <div className={styles.outerContainer}>
      <Hint options={instOptions} allowTabFill={true} allowEnterFill={true}>
        <input
          className={styles.input}
          onChange={nameFromOnChangeHandler}
          value={instName}
          placeholder="enter instrument"
          onBlur={isNameValid}
        />
      </Hint>

      {index === 0 && (
        <div className={styles.addInstDiv}>
          <button className={styles.addInstButton} onClick={addInstsClicker}>
            + Instrument
          </button>
        </div>
      )}
    </div>
  );
};

export default InstEntryBox;
