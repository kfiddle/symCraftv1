import { Fragment } from 'react';
import Header from '../header/Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
