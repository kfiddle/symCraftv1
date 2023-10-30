import { isANumber } from '../../../utils/smallUtils';

const RosterLoop = (rosterDetails) => {
  const { insts, originalLibLine, gigId, pieceNum } = rosterDetails;

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

  const instIdFromAbbrev = (abbrev) => {
    const matchingInst = insts.find((inst) => inst.abbreviation === abbrev);
    return matchingInst ? matchingInst.id : 0;
  };

  const makeChairsWithInstAndNum = (inst, num) => {
    const chairsOnStage = [];
    for (let seat = 1; seat <= num; seat++) {
      chairsOnStage.push(new Chair(new Part(inst.id, seat)));
    }

    return chairsOnStage;
  };

  const makePartFromNumOnEnd = (chunk) => {
    let abbrev = chunk.slice(0, -1);
    let lastChar = chunk[chunk.length - 1];
    if (instIdFromAbbrev(abbrev) && isANumber(lastChar)) {
      return new Part(instIdFromAbbrev(abbrev), lastChar);
    }
    return undefined;
  };

  const makePart = (chunk) => {
    let noDigit = instIdFromAbbrev(chunk);
    let withDigit = instIdFromAbbrev(chunk.slice(0, -1));

    if (noDigit) return new Part(noDigit);

    let lastChar = chunk[chunk.length - 1];
    if (withDigit && isANumber(lastChar)) return new Part(withDigit, lastChar);

    return undefined;
  };

  const makeChairSlashesOrDigit = (primaryInst, chunk) => {
    if (!chunk.includes('/')) return new Chair(makePart(chunk));
    else {
      const splitSlashes = chunk.split('/');
      let createdChair = new Chair(new Part(primaryInst.id, splitSlashes[0]));
      for (let part of splitSlashes.slice(1)) createdChair.add(makePart(part));
      return createdChair;
    }
  };

  const extractChairsFromSectionChunk = (primaryInst, chunk) => {
    if (isANumber(chunk)) return makeChairsWithInstAndNum(primaryInst, chunk);

    let resultsArray = [];
    const arrayOfChunks = chunk.split('.');

    for (let chairFrag of arrayOfChunks) {
      if (isANumber(chairFrag)) resultsArray.push(new Chair(new Part(primaryInst.id, chairFrag)));
      else if (instIdFromAbbrev(chairFrag)) resultsArray.push(new Chair(new Part(instIdFromAbbrev)));
      else resultsArray.push(makeChairSlashesOrDigit(primaryInst, chairFrag));
    }
    return resultsArray;
  };

  const extractWindsOrBrass = (windsLine) => {
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

  const getBiggestChunks = (originalLibLine) => {
    const libLine = originalLibLine.replace(/\s+/g, '');
    const bigChunks = [];

    const hyphenIndex = libLine.search(/[-—]/);

    if (hyphenIndex !== -1) {
      const firstPart = libLine.slice(0, hyphenIndex);
      const remaining = libLine.slice(hyphenIndex + 1);
      const secondHyphenIndex = remaining.search(/[-—]/);

      if (secondHyphenIndex !== -1) {
        const secondPart = remaining.slice(0, secondHyphenIndex);
        const thirdPart = remaining.slice(secondHyphenIndex + 1);
        bigChunks.push(firstPart, secondPart, thirdPart);
      } else {
        bigChunks.push(firstPart, remaining);
      }
    } else {
      bigChunks.push(libLine);
    }

    return bigChunks;
  };

  const primaryWinds = insts.filter((inst) => ['flute', 'oboe', 'clarinet', 'bassoon'].includes(inst.name));
  const primaryBrass = insts.filter((inst) => ['horn', 'trumpet', 'trombone', 'tuba'].includes(inst.name));

  const windBrassElseChunks = getBiggestChunks(originalLibLine);

  const windsLine = windBrassElseChunks[0];
  const brassLine = windBrassElseChunks[1];
  const allElse = windBrassElseChunks[2];

  const windsArr = extractWindsOrBrass(windsLine);
  const brassArr = extractWindsOrBrass(brassLine);

  const windsChairs = windsArr.map((_, j) => extractChairsFromSectionChunk(primaryWinds[j], windsArr[j])).flat();
  const brassChairs = brassArr.map((_, j) => extractChairsFromSectionChunk(primaryBrass[j], brassArr[j])).flat();
  const allChairs = [...windsChairs, ...brassChairs];

  return allChairs;
};

export default RosterLoop;
