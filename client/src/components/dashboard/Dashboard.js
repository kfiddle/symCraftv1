
import styles from './Dashboard.module.css';
import LibraryUploader from '../library/LibraryUploader';

const Dashboard = () => {


  return <div className={styles.outerContainer}>


    <LibraryUploader />
  </div>;
};

export default Dashboard;
