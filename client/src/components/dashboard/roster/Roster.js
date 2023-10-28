import { useContext } from 'react';
import { useSelector } from 'react-redux';

import generalStore from '../../../contextStore/general-store';

import RosterGenerator from '../../rosterGenerator/RosterGenerator';

import styles from './Roster.module.css';
import fetchPost from '../../../utils/fetchPost';

const composerAndWorkUrl = 'daniels_query/by_composer_work';
const workDetailsUrl = 'daniels_query/work_by_id';

const Roster = () => {
  const { dashState, rosterDispatch } = useContext(generalStore);
  const { allInsts: insts } = useSelector((state) => state.insts);

  const submitComposerAndWork = async () => {
    const objToSend = { composer: 'Beethoven', work: 'Symphony No.5' };

    const newChairs = RosterGenerator(insts, '4[1.2.3/pic2.pic1]111—1111', '653929798aa03f88ba86d6a8', 1);
    const chairsReply = await fetchPost('chairs/', newChairs);
    console.log(chairsReply)

    // if (containsSymphony(work)) {
    //   objToSend.work = `Symphony No.${returnNumber(work)}`;
    // } else {
    //   objToSend.work = work;
    // }
    const response = await fetch(process.env.REACT_APP_SERVER + composerAndWorkUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objToSend),
    });

    if (response.ok) {
      let jsonified = await response.json();
      console.log(jsonified);
      // if (jsonified.length === 0) setBadSubmission(true);
      // setRepliedWorks(jsonified);
    }
  };
  // "719"

  const submitWork = async (workId) => {
    const reply = await fetch(process.env.REACT_APP_SERVER + workDetailsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 719 }),
    });
    if (reply.ok) {
      const workDetails = await reply.json();
      console.log(workDetails.formula);
    }
  };

  let displayableChairs = [];
  if (dashState.chairs.length > 0) {
    let chairs = dashState.chairs.reduce((list, chair) => {
      let instToFind = insts.find((inst) => inst.id === chair.parts[0].inst);
      let instAbbv = instToFind.abbreviation;
      let chairId = chair.id;
      let rank = chair.parts[0].rank;
      list.push({ instAbbv, rank, chairId });
      return list;
    }, []);

    displayableChairs = chairs.map((chair) => (
      <div key={chair.chairId}>
        {chair.instAbbv} {chair.rank}
      </div>
    ));
  }

  return (
    <div>
      {displayableChairs}
      <button onClick={submitComposerAndWork}>TEST DANIELS</button>
      <button onClick={submitWork}>TEST DANIELS SINGLE WORK</button>
    </div>
  );
};

export default Roster;
