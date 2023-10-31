import { useState, useEffect } from 'react';
import fetchGet from '../utils/fetchGet';

const useApiData = (endpoint, watchVar) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchGet(endpoint);
      if (response !== 'failed') {
        console.log(response);
        setData(response);
      }
      setLoading(false);
    };

    if (watchVar) fetchData();
  }, [watchVar]);

  return { data, loading };
}

export default useApiData;
