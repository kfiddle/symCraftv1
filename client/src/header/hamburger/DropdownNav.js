import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

const DropdownNav = () => {
  return (
    <div>
      <ul className={styles.dropdown}>
        <li className={styles.navItem}>
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
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={'/notices'}
            // onClick={closeSideBar}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inActive
            }
          >
            NOTICES
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink
            to={'library'}
            // onClick={closeSideBar}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inActive
            }
          >
            Library
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink
            to={'/subs'}
            // onClick={closeSideBar}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inActive
            }
          >
            Subs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNav;
