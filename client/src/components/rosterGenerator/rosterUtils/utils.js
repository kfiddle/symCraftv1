import { insts } from '../dummyInsts';
import { Chair, Part } from './rosterClasses';

const primaryNames = ['flute', 'oboe', 'clarinet', 'bassoon', 'horn', 'trumpet', 'trombone', 'tuba'];
const primaries = primaryNames.map((name) => insts.find((inst) => inst.name === name));

export const instIdFromAbbrev = (abbrev) => {
  const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
  return matchingInst ? matchingInst.id : 0;
};

// "3/cbn2", or "4/pic/alto" "3/pic"
// 3/pic2
export const renderChairWithDoublings = (primaryInst, string) => {
  let chair = new Chair(new Part(primaryInst.id, string[0]));
  const partsArray = string.split('/');
  const endsWithDigit = /\w\d$/;

  for (let partString of partsArray.slice(1)) {
    if (endsWithDigit.exec(partString)) {
      const instId = instIdFromAbbrev(partString.slice(0, -1));
      const rank = partString.slice(-1);
      chair.add(new Part(instId, rank));
    } else {
      const instId = instIdFromAbbrev(partString);
      chair.add(new Part(instId));
    }
  }

  return chair;
};

export const goBetweenBrackets = (j, index) => {
  let primaryInst = primaries[index];
  if (primaryInst === undefined) {
    isValid = false;
    return;
  }
  let bracketSlice = libraryLine.slice(j + 1);
  let closingIndex = bracketSlice.indexOf(']');
  if (closingIndex === -1) {
    isValid = false;
    return;
  }
  let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');

  // by now, we will have only an array of [1, 2, 3/pic]
  //     or, 3[1, 2, cbn], etc...
  //4   [1, 2, 3/cbn2, cbn1]
  // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str

  withinBracketsScoreLines.forEach((scoreLine) => {
    // in case the scoreline is an abbreviation only, like "cbn" or "pic";
    const instFromAbbreviation = instIdFromAbbrev(scoreLine);
    const fromAbbrevWithRank = instIdFromAbbrev(scoreLine.slice(0, -1));
    if (instFromAbbreviation) chairsOnStage.push(new Chair(new Part(instFromAbbreviation.id)));
    // if scoreline is just a number, make a chair from the primary inst and the number
    else if (!isNaN(scoreLine)) {
      let rank = scoreLine;
      chairsOnStage.push(new Chair(new Part(primaryInst.id, rank)));

      // in case scoreline ends with a number, like "cbn2", or "crnt3"
    } else if (fromAbbrevWithRank && !isNaN(scoreLine.slice(-1))) {
      const rank = scoreLine.slice(-1);
      chairsOnStage.push(new Chair(new Part(fromAbbrevWithRank.id, rank)));

      // in this case, scoreline would be something like "3/cbn2"
    } else {
      chairsOnStage.push(renderChairWithDoublings(primaryInst, scoreLine));
    }
  });
  return closingIndex + j;
};

// 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1
export const goBetweenBracketsFragment = (j, index, text) => {
  let primaryInst = primaries[index];
  if (primaryInst === undefined) {
    isValid = false;
    return;
  }
  let bracketSlice = text.slice(j + 1);
  let closingIndex = bracketSlice.indexOf(']');
  if (closingIndex === -1) {
    isValid = false;
    return;
  }
  let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');
  return withinBracketsScoreLines;
}

export const mainLoop = (text) => {
  const chairScaffold = [];
  let times = 0;
  for (let j = 0; j < text.length; j++) {
    if (text[j] !== '-') {
      let nextChar = text[j + 1];
      if (nextChar === '[') {
        j = goBetweenBracketsFragment(j, times, text);
        times++;
      } else if (!isNaN(text[j])) {
        for (let k = 1; k <= text[j]; k++) {
          // chairsOnStage.push(new Chair(new Part(primaries[times].id, k)));
          chairScaffold.push({part: primaries[times].name, rank: k})
        }
        times++;
      }
    }
  }
  return chairScaffold;
};
