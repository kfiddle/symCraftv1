import { mainChunks, extractWinds } from './mainChunks';

test('main loop should return full array of chunks', () => {
  const lib0 = '3[1.2.pic] 2 2 2 - 4 4 4 4 ';
  const lib = '3[1.2.pic] 2  3[1.2.Eh]  2';
  const lib2 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] - 4  5[1.2.3.crt1.crt2]';
  const lib1 = '3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] - 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str';
  //[3[1.2.pic], 3[1.2.Eh], 2, 4[1.2.3.cbn], 4,  5[1.2.3.crt1.crt2], 3,  1, tmp+3, 2hp, str]

  // const lib2 =
  //   '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str';
  // const lib3 = '4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str';
  // const lib4 = '3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str';
  // const lib5 = '3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str';
  // const lib6 = '3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str';
  // const lib7 = '3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str';
  // const lib8 = '3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str';

  // const lib0Results = mainChunks(lib0);
  // expect(lib0Results).toEqual('3[1.2.pic]222');

  expect(mainChunks(lib2)).toEqual('3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]');
  expect(mainChunks(lib1)).toEqual('3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]');
});

test('should be able to extract winds lines', () => {
  const windsLine = '0000';
  const windsLine1 = '1111';
  const winds3 = '3[1.2.pic]222';
  const winds4 = '3[1.2.pic]23[1.2.Eh]3';
  const winds5 = '3[1.2.pic]3[1.2.Eh]24[1.2.3.cbn]';

  expect(extractWinds(windsLine)).toEqual([0, 0, 0, 0]);
  expect(extractWinds(windsLine1)).toEqual([1, 1, 1, 1]);
  expect(extractWinds(winds3)).toEqual(['1.2.pic', 2, 2, 2]);
  expect(extractWinds(winds4)).toEqual(['1.2.pic', 2, '1.2.Eh', 3]);
  expect(extractWinds(winds5)).toEqual(['1.2.pic', '1.2.Eh', 2, '1.2.3.cbn']);
});
