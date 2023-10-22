// import Inst from './Inst';
const Inst = require('./Inst');

// revisit what we think of "violin" vs "violin1" or "violin2"

const flute = new Inst('1', 'flute', 'fl');
const piccolo = new Inst('2', 'piccolo', 'pic', flute);
const fluteC = new Inst('3', 'bass flute in C', 'bfl', flute);
const altoFlute = new Inst('4', 'alto flute', 'afl', flute);

const oboe = new Inst('5', 'oboe', 'ob');
const englishHorn = new Inst('6', 'english horn', 'Eh', oboe);
const damore = new Inst('7', "oboe d'amore", "ob d'am", oboe);
const ocass = new Inst('8', 'oboe da caccia', 'ob da cacc', oboe);

const clarinet = new Inst('9', 'clarinet', 'cl');
const Ebcl = new Inst('10', 'Eb clarinet', 'Ebcl', clarinet);
const bassClarinet = new Inst('11', 'bass clarinet', 'bcl', clarinet);
const contrabassClarinet = new Inst('12', 'contrabass clarinet', 'cbcl', clarinet);
const bassClarinetA = new Inst('13', 'bass clarinet in A', 'bcl(A)', clarinet);
const altoCl = new Inst('14', 'alto clarinet', 'acl', clarinet);
const dClar = new Inst('15', 'D clarinet', 'D-cl', clarinet);

const gtr = new Inst('16', 'guitar', 'gtr');
const harm = new Inst('17', 'harmonium', 'harm');

const bassGuitar = new Inst('18', 'bass guitar', 'bgtr');
const quartet = new Inst('19', 'quartet', '4t');
const quintet = new Inst('20', 'quintet', '5t');
const altoVoice = new Inst('21', 'alto voice', 'A');
const accord = new Inst('22', 'accordion', 'accord');

const sax = new Inst('23', 'saxophone', 'sx');
const altoSax = new Inst('24', 'alto saxophone', 'asx');
const trombaContra = new Inst('25', 'tromba contralta', 'atp');

const baritoneVoice = new Inst('26', 'baritone voice', 'Bar');
const bassVoice = new Inst('27', 'bass voice', 'Bs');
const bassBarVoice = new Inst('28', 'bass-baritone voice', 'Bs-Bar');
const tenor = new Inst('29', 'tenor voice', 'T');
const cTenor = new Inst('30', 'countertenor', 'CT');
const mz = new Inst('31', 'mezzo-soprano voice', 'Ms');
const s = new Inst('32', 'soprano voice', 'S');

const narr = new Inst('33', 'narrator', 'narr');
const bassetHorn = new Inst('34', 'basset horn', 'basset hn');
const rec = new Inst('35', 'recorder', 'rec');

const bariHorn = new Inst('36', 'baritone horn', 'bar hn');
const tenorSax = new Inst('37', 'tenor saxophone', 'tsx');
const bariSax = new Inst('38', 'baritone sax', 'bsx');

const bassoon = new Inst('39', 'bassoon', 'bn');
const contrabassoon = new Inst('40', 'contrabassoon', 'cbn', bassoon);

const horn = new Inst('41', 'horn', 'hn');
const wagnerTuba = new Inst('42', 'Wagner Tuba', 'Wag tb', horn);
const pHorn = new Inst('43', 'posthorn', 'posthn');

const trumpet = new Inst('44', 'trumpet', 'tpt');
const cornet = new Inst('45', 'cornet', 'crt', trumpet);
const piccTrumpet = new Inst('46', 'piccolo trumpet', 'pic tp', trumpet);
const bassTrump = new Inst('47', 'bass trumpet', 'btp', trumpet);
const flug = new Inst('48', 'flugelhorn', 'flug', trumpet);

const trombone = new Inst('49', 'trombone', 'tbn');
const bassTromb = new Inst('50', 'bass trombone', 'btbn', trombone);

const tuba = new Inst('51', 'tuba', 'tuba');
const euph = new Inst('52', 'euphonium', 'euph', tuba);

const str = new Inst('53', 'strings', 'str');
const strQuartet = new Inst('54', 'string quartet', 'str 4t');
const strQuintet = new Inst('55', 'string quintet', 'str 5t');
const violin = new Inst('56', 'violin', 'vn');
const violin1 = new Inst('57', 'violin1', 'vn');
const violin2 = new Inst('58', 'violin2', 'vn');
const viola = new Inst('59', 'viola', 'va');
const cello = new Inst('60', 'cello', 'vc');
const bass = new Inst('61', 'bass', 'db');

const harp = new Inst('62', 'harp', 'hp');
const piano = new Inst('63', 'piano', 'pf');
const harps = new Inst('64', 'harpsichord', 'hpsd');
const glock = new Inst('65', 'glockenspiel', 'glock');
const kyb = new Inst('66', 'keyboard', 'kybd');
const cimbasso = new Inst('67', 'cimbasso', 'cimbasso');
const organ = new Inst('68', 'organ', 'org');
const continuo = new Inst('69', 'continuo', 'cnt');
const synth = new Inst('70', 'synthesizer', 'synth');

const percussion = new Inst('71', 'percussion', 'perc');
const bassDrum = new Inst('72', 'bass drum', 'bd');
const sd = new Inst('73', 'snare drum', 'sd');
const bassDrumCymbal = new Inst('74', 'bass drum with cymbal', 'bd/cym');
const dr = new Inst('75', 'drum', 'dr');
const set = new Inst('76', 'drum set', 'set');
const tamb = new Inst('77', 'tambourine', 'tambn');
const crot = new Inst('78', 'crotales', 'crot');
const cymbals = new Inst('79', 'cymbals', 'cym');
const tri = new Inst('80', 'triangle', 'tri');
const susCym = new Inst('81', 'suspended cymbal', 'sus cym');
const blocks = new Inst('82', 'temple blocks', 'templeblks');
const woodBl = new Inst('83', 'woodblock', 'woodblk');
const ratch = new Inst('84', 'ratchet', 'ratch');
const hh = new Inst('85', 'high-hat cymbal', 'hi-hat');
const mandolin = new Inst('86', 'mandolin', 'mand');
const marac = new Inst('87', 'maracas', 'marac');
const marimba = new Inst('88', 'marimba', 'marim');
const xyl = new Inst('89', 'xylophone', 'xyl');
const vib = new Inst('90', 'vibraphone', 'vib');
const whip = new Inst('91', 'whip', 'whip');

const primaries = [flute, oboe, clarinet, bassoon, horn, trumpet, trombone, tuba];

const insts = {
  flute,
  fluteC,
  altoFlute,
  piccolo,
  oboe,
  englishHorn,
  damore,
  ocass,

  clarinet,
  Ebcl,
  contrabassClarinet,
  bassClarinet,
  bassClarinetA,
  altoCl,
  dClar,

  bassoon,
  contrabassoon,

  horn,
  wagnerTuba,
  pHorn,

  trumpet,
  piccTrumpet,
  cornet,
  bassTrump,
  flug,

  trombone,
  bassTromb,
  tuba,
  euph,
  str,
  strQuartet,
  strQuintet,
  violin,
  violin1,
  violin2,
  viola,
  cello,
  bass,

  harp,
  piano,
  harps,
  glock,
  kyb,
  cimbasso,
  organ,
  continuo,
  synth,

  percussion,
  bassDrum,
  sd,
  bassDrumCymbal,
  dr,
  set,
  tamb,
  crot,
  cymbals,
  tri,
  susCym,
  blocks,
  woodBl,
  ratch,
  hh,
  mandolin,
  marac,
  marimba,
  xyl,
  vib,
  whip,
  gtr,
  harm,
  bassGuitar,
  quartet,
  quintet,
  altoVoice,
  accord,
  sax,
  altoSax,
  trombaContra,
  baritoneVoice,
  bassVoice,
  bassBarVoice,
  tenor,
  cTenor,
  mz,
  s,
  narr,
  bariHorn,
  bassetHorn,
  rec,
  tenorSax,
  bariSax,
};

const instsArr = Object.values(insts);

// export { primaries, insts, instsArr };
module.exports = { primaries, insts, instsArr };
