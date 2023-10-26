import { useContext } from 'react';
import { useSelector } from 'react-redux';

import generalStore from '../../../contextStore/general-store';

import styles from './Roster.module.css';

const Roster = () => {
  const { dashState } = useContext(generalStore);
  const { allInsts: insts } = useSelector((state) => state.insts);

  let displayableChairs = [];
  if (dashState.chairs.length > 0) {
    let chairs = dashState.chairs.reduce((list, chair) => {
      let instToFind = insts.find(inst => inst.id === chair.parts[0].inst);
      let instAbbv = instToFind.abbreviation;
      let chairId = chair.id;
      let rank = chair.parts[0].rank;
      list.push({ instAbbv, rank, chairId});
      return list;
    }, [])


    displayableChairs = chairs.map((chair) => <div key={chair.chairId}>{chair.instAbbv} {chair.rank}</div>);
  }

  return <div>{displayableChairs}</div>;
};

export default Roster;
