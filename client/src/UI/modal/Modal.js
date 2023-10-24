import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ closeModal, children }) => {
  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(<Backdrop closeModal={closeModal} />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>
          <div>
            <h2 onClick={closeModal} className={classes.closeX}>
              X
            </h2>
            {children}
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
