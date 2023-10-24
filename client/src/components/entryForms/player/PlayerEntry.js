import Modal from '../../../UI/modal/Modal';
import Input from '../../../UI/input/Input';

import styles from './PlayerEntry.module.css';
import SubmitButton from '../../../UI/submitButton/SubmitButton';
import InstEntryBox from './InstEntryBox';

// insts: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Inst' }],
// type: { type: String, enum: ['sub', 'contract'] },
// rank: Number,
// addressLine1: String,
// addressLine2: String,
// city: String,
// state: String,
// zip: String,

const PlayerEntry = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className={styles.outerContainer}>
        <h3>New Player</h3>

        <div className={styles.namePhoneEmail}>
          <div className={styles.name}>
            <label>Fullname</label>
            <Input />
          </div>
          <div className={styles.emailPhone}>
            <label>Email</label>
            <Input />
            <label>Phone</label>
            <Input />
          </div>
        </div>

      <div>
        <InstEntryBox />
      </div>

        <label>Address Line 1</label>
        <Input /> <label>Address Line 2</label>
        <Input /> <label>City</label>
        <Input /> <label>State</label>
        <Input /> <label>Zip</label>
        <Input />
        <SubmitButton />
      </div>
    </Modal>
  );
};

export default PlayerEntry;
