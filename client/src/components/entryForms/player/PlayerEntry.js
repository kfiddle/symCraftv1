import Modal from '../../../UI/modal/Modal';
import Input from '../../../UI/input/Input';

import styles from './PlayerEntry.module.css';

// first: { type: String, required: true },
// last: { type: String, required: true },
// email: { type: String, required: true },
// insts: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Inst' }],
// phone: String,
// type: { type: String, enum: ['sub', 'contract'] },
// rank: Number,
// addressLine1: String,
// addressLine2: String,
// city: String,
// state: String,
// zip: String,

const PlayerEntry = () => {
  return (
    <Modal>
      <div>
        <h3>New Player</h3>
        <div>
          <label>Fullname</label>
          <Input />
        </div>
      </div>
    </Modal>
  );
};

export default PlayerEntry;
