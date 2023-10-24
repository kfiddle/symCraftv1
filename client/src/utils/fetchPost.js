
const fetchPost = async (url, postObj) => {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });

    if (response.ok) {
      const jsonified = await response.json();
      return jsonified;
    } else {
      return "failed";
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchPost;