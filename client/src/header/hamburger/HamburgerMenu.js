import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Dropdown from './Dropdown';

const HamburgerMenu = ({ stripesHandler, sideBarOpen }) => {
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const hovered = (truFalse) => {
    return () => setHovering(truFalse);
  };

  //reset hover after dropdown click
  const resetHover = () => {
    return setHovering(false);
  };

  //FORMER DROPDOWN (X)
  // const stripeMover = (stripeNum) => {
  //   if (!sideBarOpen && !hovering) {
  //     return styles[`bar${stripeNum}`];
  //   } else if (sideBarOpen) {
  //     return `${styles[`bar${stripeNum}`]} ${styles[`clickedBar${stripeNum}`]}`;
  //   }
  //   return `${styles[`bar${stripeNum}`]} ${styles[`hover${stripeNum}`]}`;
  // };

  const stripeMover = (stripeNum) => {
    if (!clicked && !hovering) {
      return styles[`bar${stripeNum}`];
    } else if (clicked && hovering) {
      return `${styles[`bar${stripeNum}`]} ${styles[`hover${stripeNum}`]}`;
    }
    return `${styles[`bar${stripeNum}`]} ${styles[`hover${stripeNum}`]}`;
  };

  const clicker = () => {
    // stripesHandler();
    // stripesHandler();
    if (clicked === true) setClicked(false);
    if (clicked === false) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setHovering(false);
      }, 5000);
    }
  };

  return (
    <div>
      <div
        className={styles.outerHamburger}
        onMouseEnter={hovered(true)}
        onMouseLeave={hovered(false)}
        onClick={clicker}
      >
        <div className={styles.centeringBox}>
          <span className={stripeMover(5)}></span>
          <span className={stripeMover(4)}></span>
          <span className={stripeMover(3)}></span>
          <span className={stripeMover(2)}></span>
          <span className={stripeMover(1)}></span>
        </div>
        <div>
          {clicked && (
            <Dropdown
              className={styles.dropdown}
              styles={styles}
              resetHover={resetHover}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
