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
        <HamburgerMenu  />
        <h1>SymCraft</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <NavLink
              to={'/dashboard'}
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              // onClick={closeSideBar}
              // activeClassName={styles.active}
            >
              {' '}
              Dashboard
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to={'/notices'}
              // onClick={closeSideBar}
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
            >
              NOTICES
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to={'library'}
              // onClick={closeSideBar}
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
            >
              Library
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to={'/subs'}
              // onClick={closeSideBar}
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
            >
              Subs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
