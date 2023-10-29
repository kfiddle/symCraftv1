import { getBiggestChunks, extractWindsOrBrass, primaryWinds, primaryBrass , extractChairsFromSectionChunk, makeChairSlashesOrDigit, makePart, insts } from './mainChunks';

const RosterLoop = (originalLibLine) => {
  const windBrassElseChunks = getBiggestChunks(originalLibLine);

  const windsLine = windBrassElseChunks[0];
  const brassLine = windBrassElseChunks[1];
  const allElse = windBrassElseChunks[2];

  const windsArr = extractWindsOrBrass(windsLine);
  const brassArr = extractWindsOrBrass(brassLine);

  // let windsChairs = [];

  // for (let j = 0; j < windsArr.length; j++) {
  //   const chairs = extractChairsFromSectionChunk(primaryWinds[j], windsArr[j]);
  //   windsChairs = [...windsChairs, ...chairs]
  // }

  const windsChairs = windsArr.map((_, j) => extractChairsFromSectionChunk(primaryWinds[j], windsArr[j])).flat();
  const brassChairs = brassArr.map((_, j) => extractChairsFromSectionChunk(primaryBrass[j], brassArr[j])).flat();
  const allChairs = [...windsChairs, ...brassChairs];

  console.log(allChairs);
};

export default RosterLoop;
