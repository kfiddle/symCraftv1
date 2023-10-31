import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import useApiData from '../../hooks/useApiData';

import Inst from './insts/inst/Inst';
import Input from '../../UI/input/Input';
import fetchGet from '../../utils/fetchGet';

import Insts from './insts/Insts';
import SubsOfInst from './subsOfInst/SubsOfInst';

import styles from './SubsView.module.css';

const Subs = () => {
  const { allInsts: insts } = useSelector((state) => state.insts);

  const [clickedInst, setClickedInst] = useState(null);
  const [searchText, setSearchTest] = useState('');
  const subsOfInst = useApiData(`players/inst_id/${clickedInst?.id}`, clickedInst);
  
  useEffect(() => {


  }, [clickedInst, searchText]);

  const clickedInstHandler = (instId) => setClickedInst(insts.find((inst) => inst.id === instId));

  const inputHandler = (e) => setSearchTest(e.target.value);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" onChangeHandler={inputHandler} />
        <div className={styles.instsBox}>
          <Insts insts={insts} searchText={searchText} clicker={clickedInstHandler} clickedInst={clickedInst} />
        </div>
      </div>

      <div className={styles.centerBox}>
        <Input placeholder="Enter Player" />
        {subsOfInst.data.length > 1 && <SubsOfInst players={subsOfInst.data} />}
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Subs;
