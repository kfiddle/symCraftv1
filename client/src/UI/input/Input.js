import styles from './Input.module.css';

const Input = ({ placeholder, onChangeHandler }) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={onChangeHandler}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
