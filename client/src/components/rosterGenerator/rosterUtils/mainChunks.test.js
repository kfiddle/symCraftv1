import { insts } from '../dummyInsts';
import {
  mainChunks,
  getBiggestChunks,
  extractWindsOrBrass,
  makeWindsFromNum,
  makeChairsWithInstAndNum,
  primaryWinds,
  primaryBrass,
  makeWindChairs,
  extractChairsFromSectionChunk,
  makePartFromNumOnEnd,
  makePart,
  makeChairFromSlashes,
  makeChairSlashesOrDigit,
  instFromAbbrev,
} from './mainChunks';
import { instIdFromAbbrev } from './rosterUtils';

//'4[1.2.3/pic2.pic1]4[1.2.3.Eh]4[1.2.3/Ebcl.bcl]4[1.2.3/cbn2.cbn1]—4331—backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';

test('should extract biggest chunks from full library string', () => {
  const lib1 =
    '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';
  const lib2 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str';

  const lib3 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str';
  const lib1Chunks = getBiggestChunks(lib1);
  const lib2Chunks = getBiggestChunks(lib2);
  const lib3Chunks = getBiggestChunks(lib3);

  expect(lib1Chunks).toEqual([
    '4[1.2.3/pic2.pic1]4[1.2.3.Eh]4[1.2.3/Ebcl.bcl]4[1.2.3/cbn2.cbn1]',
    '4331',
    'backstage:3tp,4Wagtubas[2ten,2bass]—tmp+4—3hp—cel,pf—str',
  ]);

  expect(lib2Chunks).toEqual(['4[1.2.3/pic2.pic1]4[1.2.3.Eh]4[1.2.3/Ebcl.bcl]4[1.2.3/cbn2.cbn1]', '4331', 'tmp+4—3hp—cel,pf—str']);
  expect(lib3Chunks).toEqual(['3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]', '45[1.2.3.crt1.crt2]31', 'tmp+3—2hp—str']);
});

test('main loop should return full array of chunks', () => {
  const lib0 = '3[1.2.pic] 2 2 2 - 4 4 4 4 ';
  const lib = '3[1.2.pic] 2  3[1.2.Eh]  2';
  const lib2 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] - 4  5[1.2.3.crt1.crt2]';
  const lib1 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] - 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str';
  //[3[1.2.pic], 3[1.2.Eh], 2, 4[1.2.3.cbn], 4,  5[1.2.3.crt1.crt2], 3,  1, tmp+3, 2hp, str]

  // const lib2 =
  //   '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';
  // const lib3 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str';
  // const lib4 = '3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str';
  // const lib5 = '3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str';
  // const lib6 = '3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str';
  // const lib7 = '3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str';
  // const lib8 = '3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str';

  // const lib0Results = mainChunks(lib0);
  // expect(lib0Results).toEqual('3[1.2.pic]222');

  expect(mainChunks(lib2)).toEqual('3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]');
  expect(mainChunks(lib1)).toEqual('3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]');
});

test('should be able to extract winds lines', () => {
  const windsLine = '0000';
  const windsLine1 = '1111';
  const winds3 = '3[1.2.pic]222';
  const winds4 = '3[1.2.pic]23[1.2.Eh]3';
  const winds5 = '3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]';

  expect(extractWindsOrBrass(windsLine)).toEqual([0, 0, 0, 0]);
  expect(extractWindsOrBrass(windsLine1)).toEqual([1, 1, 1, 1]);
  expect(extractWindsOrBrass(winds3)).toEqual(['1.2.pic', 2, 2, 2]);
  expect(extractWindsOrBrass(winds4)).toEqual(['1.2.pic', 2, '1.2.Eh', 3]);
  expect(extractWindsOrBrass(winds5)).toEqual(['1.2.pic', '1.2.Eh', 2, '1.2.3.cbn']);
});

test('should make seats given an inst and a number', () => {
  let flute = insts[0];
  const result = makeChairsWithInstAndNum(flute, 3);
  const result1 = makeChairsWithInstAndNum(flute, 4);
  expect(result.length).toEqual(3);
  expect(result1.length).toEqual(4);
});

test('should make wind chairs of full wind section from number', () => {
  let windLine = [1, 1, 1, 1];
  let winds2 = [20, 20, 20, 20];
  const result = makeWindChairs(windLine);
  const result2 = makeWindChairs(winds2);
  expect(result.length).toEqual(4);
  expect(result2.length).toEqual(80);
});

// '1.2.3.Eh'
// '1.2.3/pic2.pic1',  '1.2.3.Eh',  '1.2.3/Ebcl.bcl'
// '1.2.3/Ebcl.bcl'  '1.2.3/cbn2.cbn1'
test('should make sections of winds from string', () => {
  const string1 = '1.2.3.Eh';
  const results = extractChairsFromSectionChunk(insts[0], string1);
  expect(results.length).toEqual(4);
});

test('should create part from an abbrev with a digit', () => {
  const pic2 = 'pic2';
  const eh3 = 'Eh3';
  const cbn2 = 'cbn1';
  const non4 = 'non4';

  const pic2Part = makePartFromNumOnEnd(pic2);
  const eh3Part = makePartFromNumOnEnd(eh3);
  const cbn2Part = makePartFromNumOnEnd(cbn2);
  const nonPart = makePartFromNumOnEnd(non4);

  expect(pic2Part).toEqual({ inst: instIdFromAbbrev('pic'), rank: 2 });
  expect(eh3Part).toEqual({ inst: instIdFromAbbrev('Eh'), rank: 3 });
  expect(cbn2Part).toEqual({ inst: instIdFromAbbrev('cbn'), rank: 1 });
  expect(nonPart).toEqual(undefined);
});

// this.gig = '12';
// this.pieceNum = '3';

// 3/pic2, pic1, 2/alt3/pic2'
test('should make doublings from slashes', () => {
  const flute = { id: 'flute' };
  const one = '3/pic2';
  const two = 'pic1';
  const three = '2/alt3/pic2';

  // const chair1 = makeChairFromSlashes(flute, one);
  // const chair2 = makeChairFromSlashes(flute, two);
  // const chair3 = makeChairFromSlashes(flute, three);

  // expect(chair1).toEqual({
  //   gig: '12',
  //   pieceNum: '3',
  //   parts: [
  //     { inst: instIdFromAbbrev('fl'), rank: 3 },
  //     { inst: instIdFromAbbrev('pic'), rank: 2 },
  //   ],
  // });
});

test('should be able to break chunks up by slashes', () => {
  const chunk1 = '3/pic2';
  const chunk2 = '2/afl3/pic2';
  const chunk3 = '4/afl';

  expect(chunk1.split('/')).toEqual(['3', 'pic2']);
  expect(chunk2.split('/')).toEqual(['2', 'afl3', 'pic2']);
  expect(chunk3.split('/')).toEqual(['4', 'afl']);

  // 3/pic2, 2/afl3/pic2'
  // 3/pic, 4/afl

  // [3,pic2], [2, afl3, pic2]
  // [3, pic], [4, afl]
});

test('should make single part from either abbrev or abbrev with digit on end', () => {
  const pic2 = 'pic2';
  const eh3 = 'Eh3';
  const cbn2 = 'cbn1';
  const non4 = 'non4';
  const onlyFlute = 'fl';
  const onlyCl = 'cl';

  const pic2Part = makePart(pic2);
  const eh3Part = makePart(eh3);
  const cbn2Part = makePart(cbn2);
  const nonPart = makePart(non4);
  const flPart = makePart(onlyFlute);
  const clPart = makePart(onlyCl);

  expect(pic2Part).toEqual({ inst: instIdFromAbbrev('pic'), rank: 2 });
  expect(eh3Part).toEqual({ inst: instIdFromAbbrev('Eh'), rank: 3 });
  expect(cbn2Part).toEqual({ inst: instIdFromAbbrev('cbn'), rank: 1 });
  expect(nonPart).toEqual(undefined);
  expect(flPart).toEqual({ inst: instIdFromAbbrev('fl'), rank: null });
  expect(clPart).toEqual({ inst: instIdFromAbbrev('cl'), rank: null });
});

test('make chair from chunk with slashes', () => {
  const primaryFl = { id: 'fluteId' };

  const chunk1 = '3/pic2';
  const chunk2 = '2/afl3/pic2';
  const chunk3 = '5/crt7/pic3/fl';
  const chunk4 = '4/afl';

  const chair1 = makeChairSlashesOrDigit(primaryFl, chunk1);
  const chair2 = makeChairSlashesOrDigit(primaryFl, chunk2);
  const chair3 = makeChairSlashesOrDigit(primaryFl, chunk3);
  const chair4 = makeChairSlashesOrDigit(primaryFl, chunk4);

  expect(chair1).toEqual({
    gig: '12',
    pieceNum: '3',
    parts: [
      { inst: 'fluteId', rank: 3 },
      { inst: instIdFromAbbrev('pic'), rank: 2 },
    ],
  });

  expect(chair2).toEqual({
    gig: '12',
    pieceNum: '3',
    parts: [
      { inst: 'fluteId', rank: 2 },
      { inst: instIdFromAbbrev('afl'), rank: 3 },
      { inst: instIdFromAbbrev('pic'), rank: 2 },
    ],
  });

  // '5/crt7/pic3/fl';

  expect(chair3).toEqual({
    gig: '12',
    pieceNum: '3',
    parts: [
      { inst: 'fluteId', rank: 5 },
      { inst: instIdFromAbbrev('crt'), rank: 7 },
      { inst: instIdFromAbbrev('pic'), rank: 3 },
      { inst: instIdFromAbbrev('fl'), rank: null },
    ],
  });

  // '4/afl'
  expect(chair4).toEqual({
    gig: '12',
    pieceNum: '3',
    parts: [
      { inst: 'fluteId', rank: 4 },
      { inst: instIdFromAbbrev('afl'), rank: null },
    ],
  });
});
