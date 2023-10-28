import RosterGenerator from './RosterGenerator';
import { insts } from './dummyInsts';
import { instIdFromAbbrev, renderChairWithDoublings, goBetweenBracketsFragment, mainLoop } from './rosterUtils/utils';

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
// 3/pic2
test('should render doublings', () => {
  const primary = insts.find((inst) => inst.name === 'flute');
  const chair1 = renderChairWithDoublings(primary, '3/pic');

  const flute = insts.find((inst) => inst.id === chair1.parts[0].inst);
  const piccolo = insts.find((inst) => inst.id === chair1.parts[1].inst);

  expect(flute.name).toEqual('flute');
  expect(piccolo.name).toEqual('piccolo');
});

test('should be able to create chair with multiple parts', () => {
  // const gigId = 'gig';
  // const chair = new Chair(new Part('instId', 4));
  // expect(chair).toEqual({gigId: gigId, pieceNum: null, parts: [{inst: 'instId', rank: 4}]})
});

// insts, libraryLine, gigId, pieceNum = 0
test('rosterGenerator should function properly', () => {
  const testString1 = '3[1.2.3/pic]3332222';
  const testString2 = '4[1.2.3/pic2.pic1]111—1111';
  const lib1 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1]';

  const lib2 = '4[pic.2.3.pic]';
  const testString3 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1';
  const testString4 = '4[1.2.3/pic2.pic1]';

  const resultChairs = RosterGenerator(insts, lib1, 5, 2);
  for (let chair of resultChairs) {
    console.log(chair.parts.length);
    for (let part of chair.parts) {
      console.log(insts.find(inst => inst.id === part.inst).name);
      console.log(part.rank)
    }
  }
  expect(resultChairs.length).toEqual(16);
  // expect(resultChairs[2].parts.length).toEqual(2);
});

test('mainLoop should work', () => {
  const lib1 = '4[1.2.3/pic2.pic1]111—1111';
  const result = mainLoop(lib1);
  // console.log(result)
});
