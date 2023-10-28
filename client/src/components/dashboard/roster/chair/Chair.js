import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import styles from './Chair.module.css';

const Chair = ({ chair, isClicked, clicker }) => {
  const { allInsts: insts } = useSelector((state) => state.insts);
  const { id, parts, player } = chair;

  const getAbbrevFromId = (instId) => insts.find((inst) => inst.id === instId).abbreviation;

  let displayChair = '';
  let instName = getAbbrevFromId(parts[0].inst);
  let rank = parts[0].rank ? parts[0].rank : '';
  displayChair += `${instName} ${rank}`;
  if (parts.length > 1) {
    chair.parts.slice(1).forEach((part) => (displayChair += `/${getAbbrevFromId(part.inst)} ${part.rank ? part.rank : ''}`));
  }
  const clickHandler = () => clicker(id);

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;
  return (
    <div className={style} onClick={clickHandler}>
      {displayChair}
    </div>
  );
};

export default Chair;
