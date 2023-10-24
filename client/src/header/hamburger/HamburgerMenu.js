import { useState } from "react";

import styles from './HamburgerMenu.module.css';
import PlayerEntry from "../../components/entryForms/player/PlayerEntry";

const HamburgerMenu = ({ stripesHandler, sideBarOpen }) => {
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const hovered = (truFalse) => {
    return () => setHovering(truFalse);
  };

  const stripeMover = (stripeNum) => {
    if (!sideBarOpen && !hovering) {
      return styles[`bar${stripeNum}`];
    } else if (sideBarOpen) {
      return `${styles[`bar${stripeNum}`]} ${styles[`clickedBar${stripeNum}`]}`;
    }
    return `${styles[`bar${stripeNum}`]} ${styles[`hover${stripeNum}`]}`;
  };

  const clicker = () => {
    // stripesHandler();
    setClicked(previous => !previous)
  };
 
  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={hovered(true)}
      onMouseLeave={hovered(false)}
      onClick={clicker}
    >
      <div className={styles.centeringBox}>
        <span className={stripeMover(1)}></span>
        <span className={stripeMover(2)}></span>
        <span className={stripeMover(3)}></span>
      </div>
      {clicked && <PlayerEntry />}
    </div>
  );
};

export default HamburgerMenu;
