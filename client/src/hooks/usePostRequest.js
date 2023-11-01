import { useState } from 'react';

const usePostRequest = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makePostRequest = async (postObj) => {
    try {
      setLoading(true);

      const response = await fetch(process.env.REACT_APP_SERVER + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postObj),
      });
      
      if (response.ok) {
        const jsonified = await response.json();
        setData(jsonified);
        setLoading(false);
      } else {
        setError(response.status)
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, makePostRequest };
};

export default usePostRequest;
