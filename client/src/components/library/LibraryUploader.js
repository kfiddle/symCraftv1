import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import { useState } from 'react';

const LibraryUploader = () => {
  const [library, setLibrary] = useState([]);

  const fileHandler = async (event) => {
    let fileObj = event.target.files[0];

    ExcelRenderer(fileObj, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        const allRows = [];
        for (let row of response.rows) {
          // const original = new Date('1899-12-30');
          // original.setDate(original.getDate() + row[16]);

          let enteredFullName = row[4];
          let first = null;
          let last = enteredFullName;
          if (enteredFullName) {
            if (enteredFullName.includes(',')) [last, first] = enteredFullName.split(',').map((name) => name.trim());
          }

          let newPiece = {
            prefix: row[1],
            libNumber: row[2],
            suffix: row[3],
            composerLast: last,
            composerFirst: first,
            arranger: row[5],
            title: row[6],
            otherName: row[7],
            publisher: row[8],
            duration: row[9],
            instrumentation: row[10],
            vocalistSoloist: row[11],
            percBreakdown: row[12],
            notes: row[13],
            status: row[14],
            sign: row[15],
            updated: new Date(row[16]),
          };

          const sendItUp = async (pieceToSend) => {
            // let response = await PushBasic(pieceToSend, "add-piece");
            allRows.push(newPiece);
          };

          sendItUp(newPiece);
        }
        setLibrary([...allRows]);
      }
    });
  };

  // const showDate = () => {
  //   const original = new Date('1899-12-30');
  //   original.setDate(original.getDate() + 43647);
  //   console.log(original);
  // };

  return (
    <div>
      <label>Library Excel File</label>
      <input type="file" onChange={(event) => fileHandler(event)} style={{ padding: '10px' }} />
      <button onClick={() => console.log(library)}>Test Lib</button>
    </div>
  );
};

export default LibraryUploader;
