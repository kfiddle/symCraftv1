import styles from './Input.module.css';

const Input = ({ placeholder }) => {
  return (
    <input
      className={styles.input}
      type="text"
      // onChange={(event) => populator(event, key)}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
