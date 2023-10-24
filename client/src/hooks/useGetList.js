import { useState, useEffect } from 'react';

const useGetList = (listString) => {
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const grablist = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER + listString);

        if (response.ok) {
          const jsonedList = await response.json();
          setList(jsonedList);
        }
      } catch (err) {
        setErrorMessage(err);
      }
    };

    grablist();
  }, [listString]);

  return list ? list : errorMessage;
};

export default useGetList;
