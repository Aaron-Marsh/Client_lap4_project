// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [confirmPassword, setConfirmPassword] = useState('');
// const [email, setEmail] = useState('');
// const [error, setError] = useState('');

// const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//         if (
//             username === '' ||
//             email === '' ||
//             password === '' ||
//             confirmPassword === ''
//         ) {
//             setError(
//                 'Missing username, password or confirm password field!'
//             );
//         } else if (password.length < 4) {
//             setError('Your password should be at least 5 characters long!');
//         } else if (password !== confirmPassword) {
//             setError('Make sure password and confirm password match!');
//         } else {
//             await axios.post(
//                 `${backendUrl}${route}`,
//                 JSON.stringify({ username, email, password }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                 }
//             );
//
//             dispatch({ type: 'SET USER', payload: username });
//             navigate('/home');
//         }
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//     } catch (err) {
//         if (!err?.response) {
//             setError('No server response!');
//         } else if (err.response?.status === 500) {
//             setError(
//                 'Request to create a user was not successful! Make sure your passwords match!'
//             );
//             setErrorVisibility('visible');
//             setTimeout(() => {
//                 setErrorVisibility('hidden');
//             }, '2000');
//         } else {
//             setErrorVisibility('visible');
//             setTimeout(() => {
//                 setErrorVisibility('hidden');
//             }, '2000');
//         }
//     }
// };

// const onUsernameChange = (e) => {
//     setUsername(e.target.value);
// };

// const onPasswordChange = (e) => {
//     setPassword(e.target.value);
// };

// const onEmailChange = (e) => {
//     setEmail(e.target.value);
// };

// const onConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
// };

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styles from './styles.css';

// export const LoginModal = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [errorVisibility, setErrorVisibility] = useState('hidden');

//     const dispatch = useDispatch();
//     let navigate = useNavigate();

//     const handleSignIn = async (e) => {
//         const backendUrl = '???https://red-devils-quiz.herokuapp.com/???';
//         const route = '???auth/login???';
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
//                 navigate('/profile');
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

//     // return (
//     //     <>
//     //         <div
//     //             className="modal fade"
//     //             id="exampleModalToggle"
//     //             aria-hidden="true"
//     //             aria-labelledby="exampleModalToggleLabel"
//     //             tabIndex="-1"
//     //         >
//     //             <div className="modal-dialog modal-dialog-centered text-center">
//     //                 <div className="modal-content">
//     //                     <div className="modal-body">
//     //                         <h5
//     //                             className="modal-title"
//     //                             id="exampleModalToggleLabel"
//     //                         >
//     //                             Login
//     //                         </h5>
//     //                     </div>

//     //                     <div className="mb-3">
//     //                         <label
//     //                             htmlFor="recipient-name"
//     //                             className="col-form-label"
//     //                         >
//     //                             Username
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             className="form-control attractions-title"
//     //                             maxLength="35"
//     //                             onChange={onUsernameChange}
//     //                             required
//     //                         />
//     //                         <div className="mb-3">
//     //                             <label
//     //                                 htmlFor="recipient-name"
//     //                                 className="col-form-label"
//     //                             >
//     //                                 Password
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="form-control attractions-title"
//     //                                 onChange={onPasswordChange}
//     //                                 maxLength="35"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                     </div>
//     //                     <div className="modal-footer justify-content-center">
//     //                         <button
//     //                             className="btn btn-primary"
//     //                             onClick={handleSignIn}
//     //                             data-bs-dismiss="modal"
//     //                             aria-label="Close"
//     //                         >
//     //                             Sign in
//     //                         </button>
//     //                     </div>
//     //                     <div className="modal-footer justify-content-center">
//     //                         <button
//     //                             className="btn btn-primary"
//     //                             data-bs-target="#exampleModalToggle2"
//     //                             data-bs-toggle="modal"
//     //                         >
//     //                             Create Account
//     //                         </button>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //         {/* className="modal fade"
//     //             id="exampleModalToggle"
//     //             aria-hidden="true"
//     //             aria-labelledby="exampleModalToggleLabel"
//     //             tabIndex="-1" */}
//     //         <div
//     //             className="modal fade"
//     //             id="exampleModalToggle2"
//     //             aria-hidden="true"
//     //             aria-labelledby="exampleModalToggleLabel2"
//     //             tabIndex="-1"
//     //         >
//     //             <div className="modal-dialog modal-dialog-centered text-center">
//     //                 <div className="modal-content">
//     //                     <div className="modal-body">
//     //                         <h5
//     //                             className="modal-title"
//     //                             id="exampleModalToggleLabel2"
//     //                         >
//     //                             Create Account
//     //                         </h5>
//     //                     </div>
//     //                     <div className="mb-3">
//     //                         <label
//     //                             htmlFor="recipient-name"
//     //                             className="col-form-label"
//     //                         >
//     //                             Username
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             className="form-control attractions-title"
//     //                             maxLength="35"
//     //                             required
//     //                         />
//     //                     </div>
//     //                     <div className="mb-3">
//     //                         <label
//     //                             htmlFor="recipient-name"
//     //                             className="col-form-label"
//     //                         >
//     //                             Email
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             className="form-control attractions-title"
//     //                             maxLength="35"
//     //                             required
//     //                         />
//     //                     </div>
//     //                     <div className="mb-3">
//     //                         <label
//     //                             htmlFor="recipient-name"
//     //                             className="col-form-label"
//     //                         >
//     //                             Password
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             className="form-control attractions-title"
//     //                             maxLength="35"
//     //                             required
//     //                         />
//     //                     </div>
//     //                     <div className="mb-3">
//     //                         <label
//     //                             htmlFor="recipient-name"
//     //                             className="col-form-label"
//     //                         >
//     //                             Confirm password
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             className="form-control attractions-title"
//     //                             maxLength="35"
//     //                             required
//     //                         />
//     //                     </div>
//     //                     <div className="modal-footer justify-content-center">
//     //                         <button
//     //                             className="btn btn-primary"
//     //                             // data-bs-target="#exampleModalToggle"
//     //                             // data-bs-toggle="modal"
//     //                             data-bs-dismiss="modal"
//     //                             aria-label="Close"
//     //                         >
//     //                             Sign up
//     //                         </button>
//     //                     </div>
//     //                     <div className="modal-footer justify-content-center">
//     //                         <button
//     //                             className="btn btn-primary"
//     //                             data-bs-target="#exampleModalToggle2"
//     //                             data-bs-toggle="modal"
//     //                         >
//     //                             Already have an account? Sign in.
//     //                         </button>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //         <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
//     //             Login
//     //         </a>
//     //     </>
//     // );

//     return (
//         <>
//             <div
//                 className="modal fade"
//                 id="exampleModalToggle"
//                 aria-hidden="true"
//                 aria-labelledby="exampleModalToggleLabel"
//                 tabIndex="-1"
//             >
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5
//                                 className="modal-title"
//                                 id="exampleModalToggleLabel"
//                             >
//                                 Modal 1
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             Show a second modal and hide this one with the
//                             button below.
//                         </div>
//                         <div className="modal-footer">
//                             <button
//                                 className="btn btn-primary"
//                                 data-bs-target="#exampleModalToggle2"
//                                 data-bs-toggle="modal"
//                             >
//                                 Open second modal
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className="modal fade"
//                 id="exampleModalToggle2"
//                 aria-hidden="true"
//                 aria-labelledby="exampleModalToggleLabel2"
//                 tabIndex="-1"
//             >
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5
//                                 className="modal-title"
//                                 id="exampleModalToggleLabel2"
//                             >
//                                 Modal 2
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             Hide this modal and show the first with the button
//                             below.
//                         </div>
//                         <div className="modal-footer">
//                             <button
//                                 className="btn btn-primary"
//                                 data-bs-target="#exampleModalToggle"
//                                 data-bs-toggle="modal"
//                             >
//                                 Back to first
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <a
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 href="#exampleModalToggle"
//                 role="button"
//             >
//                 Open first modal
//             </a>
//         </>
//     );
// };
