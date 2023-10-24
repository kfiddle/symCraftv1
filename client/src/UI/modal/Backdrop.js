import classes from "./Backdrop.module.css";

const Backdrop = ({ closeModal }) => {
  return <div className={classes.backdrop} onClick={closeModal} />;
};

export default Backdrop;
