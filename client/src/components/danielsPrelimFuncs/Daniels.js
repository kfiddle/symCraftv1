
const composerAndWorkUrl = 'daniels_query/by_composer_work';
const workDetailsUrl = 'daniels_query/work_by_id';


const submitComposerAndWork = async () => {
  const objToSend = { composer: 'Beethoven', work: 'Symphony No.5' };

  const newChairs = RosterGenerator(
    insts,
    '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1',
    '653928508aa03f88ba86d6a2',
    3
  );
  const chairsReply = await fetchPost('chairs/', newChairs);
  console.log(chairsReply);

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