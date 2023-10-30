import styles from './Inst.module.css';

const Inst = ({ inst, clicker, isClicked }) => {
  const { id, name } = inst;

  const clicked = () => clicker(id);

  const style = isClicked ? styles.clickedOuterContainer : styles.outerContainer;

  return (
    <div onClick={clicked} className={style}>
      {name}
    </div>
  );
};

export default Inst;
