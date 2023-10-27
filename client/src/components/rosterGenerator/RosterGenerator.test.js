import RosterGenerator from './RosterGenerator';
import { insts } from './dummyInsts';
import { instIdFromAbbrev, renderChairWithDoublings } from './rosterUtils/utils';

test('should retrieve inst id from abbreviation', () => {
  const pic = 'pic';
  const none = 'noAbbrev';
  const piccolo = instIdFromAbbrev(pic);
  const zero = instIdFromAbbrev(none);
  expect(piccolo).toEqual('6535f01b905cb28a1305d6d2');
  expect(zero).toEqual(0);
});

// "3/cbn2", or "4/pic/alto" "3/pic"
// 3/pic2
test('should render doublings', () => {
  const primary = insts.find((inst) => inst.name === 'flute');
  const chair = renderChairWithDoublings(primary, '3/pic');
  console.log(chair);
});

test('should be able to create chair with multiple parts', () => {
  // const gigId = 'gig';
  // const chair = new Chair(new Part('instId', 4));
  // expect(chair).toEqual({gigId: gigId, pieceNum: null, parts: [{inst: 'instId', rank: 4}]})
});

// insts, libraryLine, gigId, pieceNum = 0
test('rosterGenerator should function properly', () => {
  const testString = '3[1.2.3/pic]3332222';
  const reply = RosterGenerator(insts, testString, 5, 2);
  // for (let chair of reply) {
  //   console.log(chair.parts.length);
  //   for (let part of chair.parts) console.log(part)
  // }
  expect(reply.length).toEqual(20);

  const testString2 = '4[1.2.3/pic2.pic1]111—1111';
  const reply2 = RosterGenerator(insts, testString2, 5, 2);
  // for (let chair of reply) {
  //   console.log(chair.parts.length);
  //   for (let part of chair.parts) console.log(part);
  // }
  expect(reply2.length).toEqual(11);
});
