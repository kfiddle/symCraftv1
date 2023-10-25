const fetchGet = () => {
  const innerGetFunction = async (url) => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER + url);

      if (response.ok) {
        const jsonified = await response.json();
        return jsonified;
      } else {
        return 'failed';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return innerGetFunction;
};

export default fetchGet;
