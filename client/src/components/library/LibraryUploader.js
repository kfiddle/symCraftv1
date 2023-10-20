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

          if (newPiece.composerLast && newPiece.title) allRows.push(newPiece);
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

  const sendChunk = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/pieces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pieces: data }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data sent successfully:', result);
      } else {
        console.error('Failed to send data to the backend:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while sending data to the backend:', error);
    }
  };

  const sendLibrary = async () => {
    const testPiece = { composer: 'joe', name: 'blow', age: 12, hair: null };
    console.log(Object.entries(testPiece));

    await sendChunk(library[40])
    // const chunkSize = 30;
    // const numChunks = Math.ceil(library.length / chunkSize);

    // for (let chunk = 0; chunk < numChunks; chunk++) {
    //   const startIndex = chunk * chunkSize;
    //   const endIndex = Math.min(startIndex + chunkSize, library.length);
    //   const data = library.slice(startIndex, endIndex);

    //   await sendChunk(data);
    //   // console.log(data)
    // }
  };

  return (
    <div>
      <label>Library Excel File</label>
      <input type="file" onChange={(event) => fileHandler(event)} style={{ padding: '10px' }} />
      <button onClick={sendLibrary}>SUBMIT</button>
    </div>
  );
};

export default LibraryUploader;
