// import { insts } from '../dummyInsts';
// // import { Chair, Part } from './rosterClasses';
// import { isANumber, loopFromOne } from '../../../utils/smallUtils';

// export class Part {
//   constructor(instId, rank) {
//     this.rank = rank ? +rank : null;
//     this.inst = instId;
//   }
// }
// export class Chair {
//   constructor(part) {
//     this.gig = '12';
//     this.pieceNum = '3';
//     this.parts = [part];
//   }

//   add(part) {
//     this.parts.push(part);
//   }
// }

// const primaryNames = ['flute', 'oboe', 'clarinet', 'bassoon', 'horn', 'trumpet', 'trombone', 'tuba'];
// const primaryIds = primaryNames.map((name) => insts.find((inst) => inst.name === name).id);
// const chairsOnStage = [];
// let isValid = true;

// export const instIdFromAbbrev = (abbrev) => {
//   const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
//   return matchingInst ? matchingInst.id : 0;
// };

// export const instFromAbbrev = (abbrev) => {
//   const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
//   return matchingInst ? matchingInst : 0;
// };

// // "3/cbn2", or "4/pic/alto" "3/pic"
// // 3/pic2
// export const renderChairWithDoublings = (primaryInst, string) => {
//   let chair = new Chair(new Part(primaryInst.id, string[0]));
//   const partsArray = string.split('/');
//   const endsWithDigit = /\w\d$/;

//   for (let partString of partsArray.slice(1)) {
//     if (endsWithDigit.exec(partString)) {
//       const instId = instIdFromAbbrev(partString.slice(0, -1));
//       const rank = partString.slice(-1);
//       chair.add(new Part(instId, rank));
//     } else {
//       const instId = instIdFromAbbrev(partString);
//       chair.add(new Part(instId));
//     }
//   }

//   return chair;
// };

// export const goBetweenBrackets = (j, index, libraryLine) => {
//   let primaryInst = primaryIds[index];
//   if (primaryInst === undefined) {
//     isValid = false;
//     return;
//   }
//   let bracketSlice = libraryLine.slice(j + 1);
//   let closingIndex = bracketSlice.indexOf(']');
//   if (closingIndex === -1) {
//     isValid = false;
//     return;
//   }
//   let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');

//   // by now, we will have only an array of [1, 2, 3/pic]
//   //     or, 3[1, 2, cbn], etc...
//   //4   [1, 2, 3/cbn2, cbn1]
//   // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str

//   withinBracketsScoreLines.forEach((scoreLine) => {
//     // in case the scoreline is an abbreviation only, like "cbn" or "pic";
//     const instFromAbbreviation = instIdFromAbbrev(scoreLine);
//     const fromAbbrevWithRank = instIdFromAbbrev(scoreLine.slice(0, -1));
//     if (instFromAbbreviation) chairsOnStage.push(new Chair(new Part(instFromAbbreviation.id)));
//     // if scoreline is just a number, make a chair from the primary inst and the number
//     else if (!isNaN(scoreLine)) {
//       let rank = scoreLine;
//       chairsOnStage.push(new Chair(new Part(primaryInst.id, rank)));

//       // in case scoreline ends with a number, like "cbn2", or "crnt3"
//     } else if (fromAbbrevWithRank && !isNaN(scoreLine.slice(-1))) {
//       const rank = scoreLine.slice(-1);
//       chairsOnStage.push(new Chair(new Part(fromAbbrevWithRank.id, rank)));

//       // in this case, scoreline would be something like "3/cbn2"
//     } else {
//       chairsOnStage.push(renderChairWithDoublings(primaryInst, scoreLine));
//     }
//   });
//   return closingIndex + j;
// };

// // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1
// // will for example take    '1.2.3/pic2.pic1'
// // '1.2.3.Eh'    '1.2.3/Ebcl.bcl' '1.2.3/cbn2.cbn1'

// export const addChairFromNumberOnly = (num) => chairsOnStage.push(new Chair(new Part()));

// export const addChairsFromInBrackets = (libLineFragment, index) => {
//   let primaryInst = primaryIds[index];
//   if (primaryInst === undefined) {
//     isValid = false;
//     return;
//   }
//   let bracketSlice = text.slice(j + 1);
//   let closingIndex = bracketSlice.indexOf(']');
//   if (closingIndex === -1) {
//     isValid = false;
//     return;
//   }
//   let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');
//   return withinBracketsScoreLines;
// };

// // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1

// const addBetweenBracketsChairs = (libLineFragment, primariesIndex) => {};

// // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1
// // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str
// // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str
// // 3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str
// // 3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str
// // 3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str
// // 3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str
// // 3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str
// // 2222 - 2222 - str - hp

// export const mainLoop = (libraryLine) => {
//   let times = 0;
//   for (let j = 0; j < libraryLine.length; j++) {
//     if (libraryLine[j] !== '-') {
//       let nextChar = libraryLine[j + 1];
//       if (nextChar === '[') {
//         j = goBetweenBracketsFragment(j, times, libraryLine);
//         times++;
//       } else if (isANumber(libraryLine[j])) {
//         for (let seat = 1; seat <= libraryLine[j]; seat++) {
//           chairsOnStage.push({ part: primaryIds[times], rank: seat });
//         }
//         times++;
//       }
//     }
//   }
//   return chairsOnStage;
// };

// export const addStrChairs = (libraryLine, strSections) => {
//   if (libraryLine.toLowerCase().includes('str')) {
//     for (let section in strSections) {
//       let seats = strSections[section];
//       loopFromOne(seats, (seat) => {
//         let instId = insts.find((inst) => inst.name === section).id;
//         chairsOnStage.push(new Chair(new Part(instId, seat)));
//       });
//     }
//   }
//   return chairsOnStage;
// };
