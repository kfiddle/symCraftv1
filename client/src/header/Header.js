import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
// import Stripes from "./warrantOfficerStripes/Stripes";

const MainNavigation = ({ stripesHandler, setSideBarOpen }) => {
  // const stripesHandler = () => stripesHandler();
  // const closeSideBar = () => setSideBarOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        {/* <Stripes stripesHandler={stripesHandler} sideBarOpen={props.sideBarOpen} /> */}

        <h1>SymCraft</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <NavLink
              // to={'/log'}
              // onClick={closeSideBar}
              activeClassName={styles.active}
            >
              NOTICES
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to={'/dashboard'}
              // onClick={closeSideBar}
              activeClassName={styles.active}
            >
              {' '}
              Dashboard
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to={'library'}
              // onClick={closeSideBar}
              activeClassName={styles.active}
            >
              Library
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              // to={'/sub-players'}
              // onClick={closeSideBar}
              activeClassName={styles.active}
            >
              Subs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
