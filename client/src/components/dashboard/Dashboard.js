import { useEffect } from 'react';

import styles from './Dashboard.module.css';
import LibraryUploader from '../library/LibraryUploader';

const Dashboard = () => {
  useEffect(() => {
    const grabPieces = async () => {
      const response = await fetch('http://localhost:3000/pieces');
      if (response.ok) {
        let jsonifed = await response.json();
        console.log(jsonifed);
      }
    };

    grabPieces();
  });

  return <div className={styles.outerContainer}>


    <LibraryUploader />
  </div>;
};

export default Dashboard;
