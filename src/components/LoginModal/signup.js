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
//             // console.log(username)
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
