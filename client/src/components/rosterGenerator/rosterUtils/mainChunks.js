const lib1 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str';

import { isANumber } from '../../../utils/smallUtils';
import { insts } from '../dummyInsts';
import { Chair, Part } from './rosterUtils';

export const primaryWinds = insts.filter((inst) => ['flute', 'oboe', 'clarinet', 'bassoon'].includes(inst.name));
export const primaryBrass = insts.filter((inst) => ['horn', 'trumpet', 'trombone', 'tuba'].includes(inst.name));
4;

export const instIdFromAbbrev = (abbrev) => {
  const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
  return matchingInst ? matchingInst.id : 0;
};

export const instFromAbbrev = (abbrev) => {
  const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
  return matchingInst ? matchingInst : 0;
};

export const makeChairsWithInstAndNum = (inst, num) => {
  const chairsOnStage = [];
  for (let seat = 1; seat <= num; seat++) {
    chairsOnStage.push(new Chair(new Part(inst.id, seat)));
  }

  return chairsOnStage;
};

//[3[1.2.pic], 3[1.2.Eh], 2, 4[1.2.3.cbn], 4,  5[1.2.3.crt1.crt2], 3,  1, tmp+3, 2hp, str]
// 4[1.2.3/Pic.4/Af] 3[1.2.3/Eh] 3 4[1.2.3.4/Ctr] - 4331 - T4 - 2Hp - Cel - Str
// const lib2 =
//   '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';
// const lib3 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str';
// const lib4 = '3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str';
// const lib5 = '3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str';
// const lib6 = '3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str';
// const lib7 = '3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str';
// const lib8 = '3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str';
// const lib9 = '2222 - 0000 — tmp — str';
// 0123456789
// 3[1.2.pic]     3[1.2.Eh]
// expect(lib.slice(2, 9)).toEqual('1.2.pic');
export function mainChunks(originalLibLine) {
  const libLine = originalLibLine.replace(/\s+/g, '');
  const matches = libLine.match(/[-—]/);
  if (matches) {
    const hyphenIndex = matches.index;
    return libLine.slice(0, hyphenIndex);
  }
  return libLine;
}

// expect(extractWinds(windsLine)).toEqual([0, 0, 0, 0]);
// expect(extractWinds(windsLine1)).toEqual([1, 1, 1, 1]);
// expect(extractWinds(winds3)).toEqual(['1.2.pic', 2, 2, 2]);
// expect(extractWinds(winds4)).toEqual(['1.2.pic', 2, '1.2.Eh', 3]);
// expect(extractWinds(winds5)).toEqual(['1.2.pic', '1.2.Eh', 2, '1.2.3.cbn']);

export const extractWindsOrBrass = (windsLine) => {
  let resultsArray = [];
  let j = 0;
  while (j < windsLine.length) {
    if (windsLine[j + 1] === '[') {
      let closingBracketIndex = windsLine.slice(j).indexOf(']');
      resultsArray.push(windsLine.slice(j + 2, j + closingBracketIndex));
      j += closingBracketIndex;
    } else {
      resultsArray.push(parseInt(windsLine[j]));
    }
    j++;
  }
  return resultsArray;
};

//  3/pic2, cbn, pic2, 3/pic

//

export const makePartFromNumOnEnd = (chunk) => {
  let abbrev = chunk.slice(0, -1);
  let lastChar = chunk[chunk.length - 1];
  if (instIdFromAbbrev(abbrev) && isANumber(lastChar)) {
    return new Part(instIdFromAbbrev(abbrev), lastChar);
  }
  return undefined;
};

// 3/pic2, 2/afl3/pic2'
// 3/pic, 4/afl
export const makeChairFromSlashes = (primaryInst, chunk) => {
  const splitSlashes = chunk.split('/');

  // [3,pic2], [2, afl3, pic2]
  // [5, crn7, pic3, fl]
  // [3, pic], [4, afl]

  let createdChair = new Chair(new Part(primaryInst.id, splitSlashes[0]));
  for (let part of splitSlashes.slice(1)) createdChair.add(makePart(part));

  return createdChair;
};

export const makeChairSlashOrDigit = (primaryInst, chunk) => {
  if (!chunk.includes('/')) return new Chair(makePart(chunk));
  // else return makeChairFromSlashes(primaryInst, chunk);
  // if the chunk inclides a /, send it off to extract doubling
};

// '1.2.3.Eh'
// '1.2.3/pic2.pic1',  '1.2.3.Eh',  '1.2.3/Ebcl.bcl'
// '1.2.3/Ebcl.bcl'  '1.2.3/cbn2.cbn1'

export const extractChairsFromSectionChunk = (primaryInst, chunk) => {
  let resultsArray = [];
  const arrayOfChunks = chunk.split('.');
  // [1, 2, 3, Eh] [1, 2, 3/pic2, pic1] [1, 2, 3/cbn2, cbn1];

  for (let chairFrag of arrayOfChunks) {
    if (isANumber(chairFrag)) resultsArray.push(new Chair(new Part(primaryInst.id, chairFrag)));
    if (instIdFromAbbrev(chairFrag)) resultsArray.push(new Chair(new Part(instIdFromAbbrev)));
    // else resultsArray.push(makeChairSlashOrDigit(chairFrag))
    // makeChairFromSlashOrDigit with chairFrag add this to resultsArray
  }
  return resultsArray;
};

export const makeWindChairs = (windsArr) => {
  let resultsArray = [];
  windsArr.forEach((chunk, index) => {
    let primaryInst = primaryWinds[index];
    if (isANumber(chunk) && chunk > 0) resultsArray = [...resultsArray, ...makeChairsWithInstAndNum(primaryInst, chunk)];
    // else if (instIdFromAbbrev(chunk)) resultsArray.push(new Chair(new Part(instIdFromAbbrev(chunk))));
    else extractChairsFromSectionChunk(primaryInst, chunk);
  });
  return resultsArray;
};

export const makeWindsFromNum = (index) => makeChairWithNum(primaryWinds[index], index);

export const makePart = (chunk) => {
  let noDigit = instIdFromAbbrev(chunk);
  let withDigit = instIdFromAbbrev(chunk.slice(0, -1));

  if (noDigit) return new Part(noDigit);

  let lastChar = chunk[chunk.length - 1];
  if (withDigit && isANumber(lastChar)) return new Part(withDigit, lastChar);

  return undefined;
};
