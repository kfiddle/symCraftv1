import classes from "./ModalOverlay.module.css";

const ModalOverlay = ({ styleObject, children }) => {
  return (
    <div className={classes.modal} style={styleObject}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
