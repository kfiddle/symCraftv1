import { useState, useEffect, useContext } from 'react';
import { Hint } from 'react-autocomplete-hint';
import { useSelector } from 'react-redux';

import Input from '../../../UI/input/Input';

import styles from './InstEntryBox.module.css';

const InstEntryBox = () => {
  const { allInsts: insts } = useSelector((state) => state.insts);

  const instOptions = insts.length > 0 ? insts.map((inst) => inst.name) : [];

  return (
    <div>
      <Hint options={instOptions} allowEnterFill={true} allowTabFill={true}>
        <input />
      </Hint>
    </div>
  );
};

export default InstEntryBox;
