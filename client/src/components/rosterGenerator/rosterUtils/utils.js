import { insts } from '../dummyInsts';
import { Chair, Part } from './rosterClasses';

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