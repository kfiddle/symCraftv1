const fetchPost = async (url, postObj) => {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postObj),
    });

    const jsonified = await response.json();
    return jsonified;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



export default fetchPost;
