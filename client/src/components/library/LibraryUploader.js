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
            vocalist_soloists: row[11],
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

  const sendChunks = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/piecesarray', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pieces: library }),
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



  

  // const sendLibrary2 = async () => {
  //   const chunkSize = 5;
  //   const numChunks = Math.ceil(library.length / chunkSize);
  //   let chunk = 0;
  
  //   const sendChunkWithInterval = async () => {
  //     if (chunk < numChunks) {
  //       const startIndex = chunk * chunkSize;
  //       const endIndex = Math.min(startIndex + chunkSize, library.length);
  //       const data = library.slice(startIndex, endIndex);
  //       await sendChunk(data);
  //       chunk++;
  //     } else {
  //       clearInterval(intervalId); // Stop the interval when all data is sent
  //     }
  //   };
  
  //   const intervalId = setInterval(sendChunkWithInterval, 500); // Adjust the delay (in milliseconds) as needed
  // };

  return (
    <div>
      <label>Library Excel File</label>
      <input type="file" onChange={(event) => fileHandler(event)} style={{ padding: '10px' }} />
      <button onClick={sendChunks}>SUBMIT</button>
    </div>
  );
};

export default LibraryUploader;
