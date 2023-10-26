import RosterGenerator from './RosterGenerator';

const insts = [
  { id: '6535f01a905cb28a1305d6cf', name: 'flute', abbreviation: 'fl' },
  { id: '6535f01b905cb28a1305d6d2', name: 'piccolo', abbreviation: 'pic' },
  { id: '6535f01b905cb28a1305d6d4', name: 'bass flute in C', abbreviation: 'bfl' },
  { id: '6535f01b905cb28a1305d6d6', name: 'alto flute', abbreviation: 'afl' },
  { id: '6535f01b905cb28a1305d6d8', name: 'oboe', abbreviation: 'ob' },
  { id: '6535f01b905cb28a1305d6da', name: 'english horn', abbreviation: 'Eh' },
  { id: '6535f01b905cb28a1305d6dc', name: "oboe d'amore", abbreviation: "ob d'am" },
  { id: '6535f01b905cb28a1305d6de', name: 'oboe da caccia', abbreviation: 'ob da cacc' },
  { id: '6536e4e8347f296147cebd9c', name: 'clarinet', abbreviation: 'cl' },
  { id: '6535f01c905cb28a1305d6e2', name: 'Eb clarinet', abbreviation: 'Ebcl' },
  { id: '6535f01c905cb28a1305d6e4', name: 'bass clarinet', abbreviation: 'bcl' },
  { id: '6535f01c905cb28a1305d6e6', name: 'contrabass clarinet', abbreviation: 'cbcl' },
  { id: '6535f01c905cb28a1305d6e8', name: 'bass clarinet in A', abbreviation: 'bcl(A)' },
  { id: '6535f01c905cb28a1305d6ea', name: 'alto clarinet', abbreviation: 'acl' },
  { id: '6535f01c905cb28a1305d6ec', name: 'D clarinet', abbreviation: 'D-cl' },
  { id: '6535f01c905cb28a1305d6ee', name: 'guitar', abbreviation: 'gtr' },
  { id: '6535f01c905cb28a1305d6f0', name: 'harmonium', abbreviation: 'harm' },
  { id: '6535f01c905cb28a1305d6f2', name: 'bass guitar', abbreviation: 'bgtr' },
  { id: '6535f01c905cb28a1305d6f4', name: 'quartet', abbreviation: '4t' },
  { id: '6535f01c905cb28a1305d6f6', name: 'quintet', abbreviation: '5t' },
  { id: '6535f01c905cb28a1305d6f8', name: 'alto voice', abbreviation: 'A' },
  { id: '6535f01c905cb28a1305d6fa', name: 'accordion', abbreviation: 'accord' },
  { id: '6535f01c905cb28a1305d6fc', name: 'saxophone', abbreviation: 'sx' },
  { id: '6535f01c905cb28a1305d6fe', name: 'alto saxophone', abbreviation: 'asx' },
  { id: '6535f01c905cb28a1305d700', name: 'tromba contralta', abbreviation: 'atp' },
  { id: '6535f01c905cb28a1305d702', name: 'baritone voice', abbreviation: 'Bar' },
  { id: '6535f01c905cb28a1305d704', name: 'bass voice', abbreviation: 'Bs' },
  { id: '6535f01c905cb28a1305d706', name: 'bass-baritone voice', abbreviation: 'Bs-Bar' },
  { id: '6535f01c905cb28a1305d708', name: 'tenor voice', abbreviation: 'T' },
  { id: '6535f01c905cb28a1305d70a', name: 'countertenor', abbreviation: 'CT' },
  { id: '6535f01c905cb28a1305d70c', name: 'mezzo-soprano voice', abbreviation: 'Ms' },
  { id: '6535f01c905cb28a1305d70e', name: 'soprano voice', abbreviation: 'S' },
  { id: '6535f01c905cb28a1305d710', name: 'narrator', abbreviation: 'narr' },
  { id: '6535f01c905cb28a1305d712', name: 'basset horn', abbreviation: 'basset hn' },
  { id: '6535f01c905cb28a1305d714', name: 'recorder', abbreviation: 'rec' },
  { id: '6535f01c905cb28a1305d716', name: 'baritone horn', abbreviation: 'bar hn' },
  { id: '6535f01c905cb28a1305d718', name: 'tenor saxophone', abbreviation: 'tsx' },
  { id: '6535f01d905cb28a1305d71a', name: 'baritone sax', abbreviation: 'bsx' },
  { id: '6535f01d905cb28a1305d71c', name: 'bassoon', abbreviation: 'bn' },
  { id: '6535f01d905cb28a1305d71e', name: 'contrabassoon', abbreviation: 'cbn' },
  { id: '6535f01d905cb28a1305d720', name: 'horn', abbreviation: 'hn' },
  { id: '6535f01d905cb28a1305d722', name: 'Wagner Tuba', abbreviation: 'Wag tb' },
  { id: '6535f01d905cb28a1305d724', name: 'posthorn', abbreviation: 'posthn' },
  { id: '6535f01d905cb28a1305d726', name: 'trumpet', abbreviation: 'tpt' },
  { id: '6535f01d905cb28a1305d728', name: 'cornet', abbreviation: 'crt' },
  { id: '6535f01d905cb28a1305d72a', name: 'piccolo trumpet', abbreviation: 'pic tp' },
  { id: '6535f01d905cb28a1305d72c', name: 'bass trumpet', abbreviation: 'btp' },
  { id: '6535f01d905cb28a1305d72e', name: 'flugelhorn', abbreviation: 'flug' },
  { id: '6535f01d905cb28a1305d730', name: 'trombone', abbreviation: 'tbn' },
  { id: '6535f01d905cb28a1305d732', name: 'bass trombone', abbreviation: 'btbn' },
  { id: '6535f01d905cb28a1305d734', name: 'tuba', abbreviation: 'tuba' },
  { id: '6535f01d905cb28a1305d736', name: 'euphonium', abbreviation: 'euph' },
  { id: '6535f01d905cb28a1305d738', name: 'strings', abbreviation: 'str' },
  { id: '6535f01d905cb28a1305d73a', name: 'string quartet', abbreviation: 'str 4t' },
  { id: '6535f01d905cb28a1305d73c', name: 'string quintet', abbreviation: 'str 5t' },
  { id: '6535f01d905cb28a1305d73e', name: 'violin', abbreviation: 'vn' },
  { id: '6535f01d905cb28a1305d740', name: 'violin1', abbreviation: 'vn' },
  { id: '6535f01d905cb28a1305d742', name: 'violin2', abbreviation: 'vn' },
  { id: '6535f01d905cb28a1305d744', name: 'viola', abbreviation: 'va' },
  { id: '6535f01d905cb28a1305d746', name: 'cello', abbreviation: 'vc' },
  { id: '6535f01d905cb28a1305d748', name: 'bass', abbreviation: 'db' },
  { id: '6535f01d905cb28a1305d74a', name: 'harp', abbreviation: 'hp' },
  { id: '6535f01d905cb28a1305d74c', name: 'piano', abbreviation: 'pf' },
  { id: '6535f01d905cb28a1305d74e', name: 'harpsichord', abbreviation: 'hpsd' },
  { id: '6535f01e905cb28a1305d750', name: 'glockenspiel', abbreviation: 'glock' },
  { id: '6535f01e905cb28a1305d752', name: 'keyboard', abbreviation: 'kybd' },

  { id: '6535f01e905cb28a1305d754', name: 'cimbasso', abbreviation: 'cimbasso' },

  { id: '6535f01e905cb28a1305d756', name: 'organ', abbreviation: 'org' },

  { id: '6535f01e905cb28a1305d758', name: 'continuo', abbreviation: 'cnt' },

  { id: '6535f01e905cb28a1305d75a', name: 'synthesizer', abbreviation: 'synth' },

  { id: '6535f01e905cb28a1305d75c', name: 'percussion', abbreviation: 'perc' },

  { id: '6535f01e905cb28a1305d75e', name: 'bass drum', abbreviation: 'bd' },

  { id: '6535f01e905cb28a1305d760', name: 'marimba', abbreviation: 'marim' },

  { id: '6535f01e905cb28a1305d762', name: 'snare drum', abbreviation: 'sd' },

  { id: '6535f01e905cb28a1305d764', name: 'xylophone', abbreviation: 'xyl' },

  { id: '6535f01e905cb28a1305d766', name: 'woodblock', abbreviation: 'woodblk' },

  { id: '6535f01e905cb28a1305d768', name: 'bass drum with cymbal', abbreviation: 'bd/cym' },

  { id: '6535f01e905cb28a1305d76a', name: 'drum', abbreviation: 'dr' },

  { id: '6535f01e905cb28a1305d76c', name: 'drum set', abbreviation: 'set' },

  { id: '6535f01e905cb28a1305d76e', name: 'tambourine', abbreviation: 'tambn' },

  { id: '6535f01e905cb28a1305d770', name: 'crotales', abbreviation: 'crot' },

  { id: '6535f01e905cb28a1305d772', name: 'cymbals', abbreviation: 'cym' },

  { id: '6535f01e905cb28a1305d774', name: 'triangle', abbreviation: 'tri' },

  { id: '6535f01e905cb28a1305d776', name: 'suspended cymbal', abbreviation: 'sus cym' },

  { id: '6535f01e905cb28a1305d778', name: 'temple blocks', abbreviation: 'templeblks' },

  { id: '6535f01e905cb28a1305d77a', name: 'ratchet', abbreviation: 'ratch' },

  { id: '6535f01e905cb28a1305d77c', name: 'high-hat cymbal', abbreviation: 'hi-hat' },

  { id: '6535f01e905cb28a1305d77e', name: 'mandolin', abbreviation: 'mand' },

  { id: '6535f01e905cb28a1305d780', name: 'maracas', abbreviation: 'marac' },

  { id: '6535f01e905cb28a1305d782', name: 'vibraphone', abbreviation: 'vib' },

  { id: '6535f01f905cb28a1305d784', name: 'whip', abbreviation: 'whip' },
];
// insts, libraryLine, gigId, pieceNum = 0
test('rosterGenerator should function properly', () => {
  const testString = '3[1.2.3/pic]3332222';
  const reply = RosterGenerator(insts, testString, 5, 2);
  // for (let chair of reply) {
  //   console.log(chair.parts.length);
  //   for (let part of chair.parts) console.log(part)
  // }
  expect(reply.length).toEqual(20);

  const testString2 = '4[1.2.3/pic2.pic1]111—1111';
  const reply2 = RosterGenerator(insts, testString2, 5, 2);
  for (let chair of reply) {
    console.log(chair.parts.length);
    for (let part of chair.parts) console.log(part)
  }
  expect(reply2.length).toEqual(11);
});

// const stringWithoutSpaces = inputString.replace(/\s+/g, '');
