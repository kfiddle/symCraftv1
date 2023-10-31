import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

const DropdownNav = () => {
  return (
    <div className={styles.dropdwon}>
      <nav>
        <NavLink
          to={'/dashboard'}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inActive
          }
          // onClick={closeSideBar}
          // activeClassName={styles.active}
        >
          {' '}
          Dashboard
        </NavLink>
      </nav>
      <nav>
        <NavLink
          to={'/notices'}
          // onClick={closeSideBar}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inActive
          }
        >
          Notices
        </NavLink>
      </nav>
      <nav>
        <NavLink
          to={'library'}
          // onClick={closeSideBar}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inActive
          }
        >
          Library
        </NavLink>
      </nav>
      <nav>
        <NavLink
          to={'/subs'}
          // onClick={closeSideBar}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inActive
          }
        >
          Subs
        </NavLink>
      </nav>
    </div>
  );
};

export default DropdownNav;
