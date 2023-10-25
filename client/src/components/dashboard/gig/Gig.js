
import { useEffect } from 'react';
import styles from './Gig.module.css';
import ProgramDropdown from './programDropdown/ProgramDropdown';

const Gig = ( {gig, isClicked, clicker}) => {
  const { id, title, program } = gig;
  const clickHandler = () => clicker(id);

  

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;
  return (
    <div className={style} onClick={clickHandler}>
      {title}
      {isClicked && <ProgramDropdown gigId={id} />}
    </div>
  );
};

export default Gig;