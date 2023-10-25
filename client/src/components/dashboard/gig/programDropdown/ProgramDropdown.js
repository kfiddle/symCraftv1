import { useEffect, useState } from 'react';
import styles from './ProgramDropdown.module.css';

const ProgramDropdown = ({ program, gigId }) => {
  const [pieces, setPieces] = useState([]);
  console.log(program);

  useEffect(() => {
    const getPieces = async() => {
      // get response = await fetch(process.env.REACT_APP_SERVER + 'pieces/find_by_gig/' + gigId)
    }


  }, []);


  return <div>I will be a big ol dropdown</div>;
};

export default ProgramDropdown;
