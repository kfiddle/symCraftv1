import ReactDOM from "react-dom";


import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  const { styleObject } = props;
  return (
    <div className={classes.modal} style={styleObject}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ styleObject, closeModal, children }) => {
  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay styleObject={styleObject}>
          {/* <AiOutlineClose className={classes.xIcon} onClick={closeModal}/> */}
          <div closeModal={closeModal}>{children}</div>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
