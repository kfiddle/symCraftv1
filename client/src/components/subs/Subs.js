import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import Inst from './inst/Inst';
import Input from '../../UI/input/Input';
import fetchGet from '../../utils/fetchGet';

import Insts from './Insts';
import SubsOfInst from './subsOfInst/SubsOfInst';

import styles from './Subs.module.css';

const Subs = () => {
  const { allInsts: initialInsts } = useSelector((state) => state.insts);

  const [clickedInst, setClickedInst] = useState(null);
  const [subsOfInst, setSubsOfInst] = useState([]);
  const [searchText, setSearchTest] = useState('');

  const [insts, setInsts] = useState([]);

  useEffect(() => {
    const getPlayersOfInst = async () => {
      let response = await fetchGet(`players/inst_id/${clickedInst.id}`);
      if (response !== 'failed') setSubsOfInst(response);
    };
    if (clickedInst) getPlayersOfInst();

    setInsts(initialInsts);

    // if (inputVal !== '') {

    // }
  }, [clickedInst, inputVal]);

  const clickedInstHandler = (instId) => setClickedInst(insts.find((inst) => inst.id === instId));

  const inputHandler = (e) => setInputVal(e.target.value);

  let displayableInsts =
    insts.length > 0
      ? insts.map((inst) => <Inst key={inst.id} inst={inst} clicker={clickedInstHandler} isClicked={inst === clickedInst} />)
      : [];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftBox}>
        <Input placeholder="Enter Instrument" onChangeHandler={inputHandler} />
        <div className={styles.instsBox}>
          {displayableInsts}
          <Insts insts={insts} clicker={clickedInstHandler} clickedInst={clickedInst} />
        </div>
      </div>

      <div className={styles.centerBox}>
        <Input placeholder="Enter Player" />

        {clickedInst && <SubsOfInst players={subsOfInst} />}
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Subs;
