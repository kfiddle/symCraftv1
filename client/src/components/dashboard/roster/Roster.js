import { useContext } from 'react';
import { useSelector } from 'react-redux';

import generalStore from '../../../contextStore/general-store';
import RosterGenerator from '../../rosterGenerator/RosterGenerator';
import RosterLoop from '../../rosterGenerator/rosterUtils/RosterLoop';

import Chair from './chair/Chair';
import styles from './Roster.module.css';

const stringNames = ['flute', 'violin2', 'viola', 'cello', 'bass'];

const Roster = () => {
  const { dashState } = useContext(generalStore);
  const { allInsts: insts } = useSelector((state) => state.insts);

  const stringInstIds = insts.filter((inst) => stringNames.includes(inst.name)).map((inst) => inst.id);

  // console.log(stringInsts);
  // let displayableChairs = dashState.chairs.length > 0 ?
  //   dashState.chairs.map(chair => <Chair key={chair.id} chair={chair}/>)
  // : []

  let strings =
    dashState.chairs.length > 0
      ? dashState.chairs
          .filter((chair) => stringInstIds.includes(chair.parts[0].inst))
          .map((chair) => <Chair key={chair.id} chair={chair} />)
      : [];

  // const

  const clicker = () => {
    let originalLibLine = '1111 - 1111 str';
    let testLine1 =
      '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';

    let testLine2 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str';
    let testLine3 = '3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str';
    let testLine4 = '2  2  2  2 — 2  2  0  0 — tmp — str';

    let gigId = '65392a0e8aa03f88ba86d6ae';
    const strSections = { violin1: 12, violin2: 12, viola: 8, cello: 8, bass: 6 };
    const allRosterDetails = {
      insts,
      originalLibLine: testLine4,
      gigId,
      pieceNum: 3,
      strSections,
    };
    try {
      const resultChairs = RosterLoop(allRosterDetails);
      console.log(resultChairs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {strings}
      <button onClick={clicker}>MAKE CHAIRS</button>
    </div>
  );
};

export default Roster;
