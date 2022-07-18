const initialState = "";

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export default serverReducer;

// const fetchPosts = async () => {
//     try {
//         let server_url = "https://read-herring.herokuapp.com/forums"
//         const { data } = await axios.get(server_url);
//         console.log("DATA:",data);
//         setPosts(data);
//     } catch (err) {
//         throw new Error(err.message);
//     }
// }
