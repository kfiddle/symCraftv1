const lib1 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str';

import { isANumber } from '../../../utils/smallUtils';
import { insts } from '../dummyInsts';
import { Chair, Part } from './rosterUtils';

const primaryWinds = insts.filter((inst) => ['flute', 'oboe', 'clarinet', 'bassoon'].includes(inst.name));
const primaryBrass = insts.filter((inst) => ['horn', 'trumpet', 'trombone', 'tuba'].includes(inst.name));
const chairsOnStage = [];

export const makeChairsWithInstAndNum = (inst, num) => {
  for (let seat = 1; seat <= num; seat++) chairsOnStage.push(new Chair(new Part(inst.id, seat)));
  return chairsOnStage;
};

//[3[1.2.pic], 3[1.2.Eh], 2, 4[1.2.3.cbn], 4,  5[1.2.3.crt1.crt2], 3,  1, tmp+3, 2hp, str]

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

// ['1.2.3/pic2.pic1',  '1.2.3.Eh',  '1.2.3/Ebcl.bcl', 4];

export const makeWindChairs = (windsArr) => {
  const resultChairs = [];
  for (let index of windsArr) {
    if (isANumber(index) && index > 0) resultChairs.push(makeChairWithNum(primaryWinds[index], index));
  } else if ()
};

export const makeWindsFromNum = (index) => makeChairWithNum(primaryWinds[index], index);
