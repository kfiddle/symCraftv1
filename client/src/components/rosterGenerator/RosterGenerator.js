// const chairSchema = new mongoose.Schema({
//   player: { type: mongoose.Types.ObjectId, ref: 'Player' },
//   gig: { type: mongoose.Types.ObjectId, ref: 'Gig', required: true },
//   pieceNum: Number,
//   parts: [
//     {
//       inst: { type: mongoose.Types.ObjectId, ref: 'Inst' },
//       rank: Number,
//     },
//   ],
// });

import { loop } from '../../utils/loop';
import { addStrChairs } from './rosterUtils/utils';

const RosterGenerator = (rosterParams) => {
  const { insts, originalLibLine, gigId, pieceNum = 0, stringsConfig } = rosterParams;
  const libraryLine = originalLibLine.replace(/\s+/g, '');

  class Part {
    constructor(instId, rank) {
      this.rank = rank ? +rank : null;
      this.inst = instId;
    }
  }
  class Chair {
    constructor(part) {
      this.gig = gigId;
      this.pieceNum = pieceNum;
      this.parts = [part];
    }

    add(part) {
      this.parts.push(part);
    }
  }

  const primaryNames = ['flute', 'oboe', 'clarinet', 'bassoon', 'horn', 'trumpet', 'trombone', 'tuba'];
  const strings = ['violin1', 'violin2', 'viola', 'cello', 'bass'];

  const primaryWindsBrass = insts.filter((inst) => primaryNames.includes(inst.name));

  let isValid = true;
  let chairsOnStage = [];

  const instIdFromAbbrev = (abbrev) => {
    const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
    return matchingInst ? matchingInst.id : 0;
  };

  // ('3/cbn2');
  const renderChairWithDoublings = (primaryInst, string) => {
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

  // '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1]
  //0 0
  const goBetweenBrackets = (j, index) => {
    let primaryInst = primaryWindsBrass[index];
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
      if (instFromAbbreviation) chairsOnStage.push(new Chair(new Part(instFromAbbreviation)));
      // if scoreline is just a number, make a chair from the primary inst and the number
      else if (!isNaN(scoreLine)) {
        let rank = scoreLine;
        chairsOnStage.push(new Chair(new Part(primaryInst.id, rank)));

        // in case scoreline ends with a number, like "cbn2", or "crnt3"
      } else if (fromAbbrevWithRank && !isNaN(scoreLine.slice(-1))) {
        const rank = scoreLine.slice(-1);
        chairsOnStage.push(new Chair(new Part(fromAbbrevWithRank, rank)));

        // in this case, scoreline would be something like "3/cbn2"
      } else {
        chairsOnStage.push(renderChairWithDoublings(primaryInst, scoreLine));
      }
    });
    return closingIndex + j;
  };

  // '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1]
  const mainLoop = (text) => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[j] !== '-') {
        let nextChar = text[j + 1];
        if (nextChar === '[') {
          j = goBetweenBrackets(j, times);
          times++;
        } else if (!isNaN(text[j])) {
          for (let k = 1; k <= text[j]; k++) {
            chairsOnStage.push(new Chair(new Part(primaryWindsBrass[times].id, k)));
          }
          times++;
        }
      }
    }
  };

  mainLoop(libraryLine);
  const strConfig = { violin1: 12, violin2: 12, viola: 8, cello: 8, bass: 6 };

  if (libraryLine.toLowerCase().includes('str')) chairsOnStage.append(addStrChairs(libraryLine, strConfig));
  return isValid ? chairsOnStage : false;
};

export const instIdFromAbbrev = RosterGenerator.instIdFromAbbrev;
export default RosterGenerator;
