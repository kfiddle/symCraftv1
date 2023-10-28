import { useContext } from 'react';
import { useSelector } from 'react-redux';

import generalStore from '../../../contextStore/general-store';

import Chair from './chair/Chair';
import styles from './Roster.module.css';

const stringNames = ['flute', 'violin2', 'viola', 'cello', 'bass'];

const Roster = () => {
  const { dashState } = useContext(generalStore);
  const { allInsts: insts } = useSelector((state) => state.insts);

  const stringInstIds = insts.filter((inst) => stringNames.includes(inst.name)).map((inst) => inst.id);
  // console.log(stringInsts);
  // let displayableChairs = dashState.chairs.length > 0 ?
  //   dashState.chairs.map(chair => <Chair key={chair.id} chair={chair}/>)
  // : []

  let strings = dashState.chairs.length > 0 ? dashState.chairs.filter((chair) => stringInstIds.includes(chair.parts[0].inst))
  .map(chair => <Chair key={chair.id} chair={chair}/>)
  : [];

  // const

  return <div>{strings}</div>;
};

export default Roster;
