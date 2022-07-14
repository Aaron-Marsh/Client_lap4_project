// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginModal = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [errorVisibility, setErrorVisibility] = useState('hidden');

//     const dispatch = useDispatch();
//     let navigate = useNavigate();

//     const handleSignIn = async (e) => {
//         const backendUrl = '???https://red-devils-quiz.herokuapp.com/???';
//         const route = 'auth/login';
//         e.preventDefault();
//         try {
//             if (username === '' || password === '') {
//                 setError('Missing username or password!');
//             } else {
//                 await axios.post(
//                     `${backendUrl}${route}`,
//                     JSON.stringify({ username, password }),
//                     {
//                         headers: { 'Content-Type': 'application/json' },
//                     }
//                 );
//                 dispatch({ type: 'SET USER', payload: username });
//                 navigate('/???home???');
//             }
//             setUsername('');
//             setPassword('');
//         } catch (err) {
//             if (!err?.response) {
//                 setError('No server response!');
//             } else if (err.response?.status === 401) {
//                 setError(
//                     'Unauthorized! Create an account or check your username and password spelling!'
//                 );
//                 setErrorVisibility('visible');
//                 setTimeout(() => {
//                     setErrorVisibility('hidden');
//                 }, '2000');
//             } else {
//                 setError('Login failed!');
//                 setErrorVisibility('visible');
//                 setTimeout(() => {
//                     setErrorVisibility('hidden');
//                 }, '2000');
//             }
//         }
//     };

//     const onUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const onPasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     return (
//         <>
//             <div className="introText">
//                 <h2 className="introLine1">Fun quiz game</h2>
//                 <h2>Will you be dumbfounded?</h2>
//             </div>
//             <div className="loginError" style={{ visibility: errorVisibility }}>
//                 {error}
//             </div>
//             <form
//                 data-testid="form"
//                 aria-label="login"
//                 className="loginForm"
//                 onSubmit={handleSignIn}
//             >
//                 <h2 className="loginText">Login</h2>
//                 <label className="userLabel" htmlFor="username">
//                     Username
//                 </label>
//                 <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     className="usernameInput"
//                     autoFocus
//                     placeholder="Username"
//                     value={username}
//                     onChange={onUsernameChange}
//                     data-testid="usernameInput"
//                 />
//                 <label className="passLabel" htmlFor="password">
//                     Password
//                 </label>
//                 <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="passwordInput"
//                     autoFocus
//                     placeholder="Password"
//                     value={password}
//                     onChange={onPasswordChange}
//                     data-testid="passwordInput"
//                 />
//                 <button
//                     data-testid="signIn"
//                     className="signIn"
//                     onClick={handleSignIn}
//                 >
//                     Sign in
//                 </button>
//                 <button
//                     className="createAccount"
//                     onClick={() => navigate('/register')}
//                 >
//                     Create an account
//                 </button>
//             </form>
//         </>
//     );
// };

// export default LoginModal;
