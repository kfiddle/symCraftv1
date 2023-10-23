import styles from './SubmitButton.module.css';

const SubmitButton = ({ submitFunc }) => {

  return (
    <button className={styles.button} onClick={submitFunc}>
      Submit 
    </button>
  );
};

export default SubmitButton;