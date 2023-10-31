import { useState, useEffect } from 'react';
import fetchGet from '../utils/fetchGet';

const useApiData = (endpoint, makeCallFlag) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchGet(endpoint);
      if (response !== 'failed') {
        console.log(response)
        setData(response);
      }
      setLoading(false);
    };

    if (makeCallFlag) fetchData();
  }, [makeCallFlag]); // Use dependencies as the dependency array

  return { data, loading };
}

export default useApiData;
