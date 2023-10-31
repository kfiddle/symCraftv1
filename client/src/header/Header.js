import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import HamburgerMenu from './hamburger/HamburgerMenu';
// import Stripes from "./warrantOfficerStripes/Stripes";

const Header = ({ stripesHandler, setSideBarOpen }) => {
  // const stripesHandler = () => stripesHandler();
  // const closeSideBar = () => setSideBarOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        {/* <HamburgerMenu stripesHandler={stripesHandler} sideBarOpen={props.sideBarOpen} /> */}
        <HamburgerMenu />
        <NavLink to={'/dashboard'} style={{ textDecoration: 'none' }}>
          <h1>SymCraft</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
