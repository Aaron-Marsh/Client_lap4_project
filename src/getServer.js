// import { useDispatch } from "react-redux";
// import { setServer } from './actions'

// function getServer() {
//     // const devServerUrl = "http://127.0.0.1:8000"
//     const devServerUrl = "https://read-herring.herokuapp.com";
//     const prodServerUrl = "https://read-herring.herokuapp.com";

//     const establishEnv = () => {
//         let serverUrl;
//         if (process.env.NODE_ENV === "production") {
//             console.log("Client is Running in Production");
//             serverUrl = prodServerUrl;
//         }
//         if (process.env.NODE_ENV === "development") {
//             console.log("Client is Running in Development");
//             serverUrl = devServerUrl;
//         }
//         return serverUrl;
//     };
//     let serverUrl = establishEnv();

//     useDispatch(setServer(serverUrl));
// };

// export default getServer
