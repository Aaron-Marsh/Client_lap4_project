import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginModal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorVisibility, setErrorVisibility] = useState('hidden');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleSignIn = async (e) => {
        const backendUrl = '???https://red-devils-quiz.herokuapp.com/???';
        const route = '???auth/login???';
        e.preventDefault();
        try {
            if (username === '' || password === '') {
                setError('Missing username or password!');
            } else {
                await axios.post(
                    `${backendUrl}${route}`,
                    JSON.stringify({ username, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                dispatch({ type: 'SET USER', payload: username });
                navigate('/profile');
            }
            setUsername('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setError('No server response!');
            } else if (err.response?.status === 401) {
                setError(
                    'Unauthorized! Create an account or check your username and password spelling!'
                );
                setErrorVisibility('visible');
                setTimeout(() => {
                    setErrorVisibility('hidden');
                }, '2000');
            } else {
                setError('Login failed!');
                setErrorVisibility('visible');
                setTimeout(() => {
                    setErrorVisibility('hidden');
                }, '2000');
            }
        }
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered text-center">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5
                                className="modal-title"
                                id="exampleModalToggleLabel"
                            >
                                Login
                            </h5>
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control attractions-title"
                                maxLength="35"
                                onChange={onUsernameChange}
                                required
                            />
                            <div className="mb-3">
                                <label
                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control attractions-title"
                                    onChange={onPasswordChange}
                                    maxLength="35"
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                className="btn btn-primary"
                                onClick={handleSignIn}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                            >
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1" */}
            <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered text-center">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5
                                className="modal-title"
                                id="exampleModalToggleLabel2"
                            >
                                Create Account
                            </h5>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control attractions-title"
                                maxLength="35"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control attractions-title"
                                maxLength="35"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                className="form-control attractions-title"
                                maxLength="35"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                Confirm password
                            </label>
                            <input
                                type="text"
                                className="form-control attractions-title"
                                maxLength="35"
                                required
                            />
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                className="btn btn-primary"
                                // data-bs-target="#exampleModalToggle"
                                // data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Sign up
                            </button>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                            >
                                Already have an account? Sign in.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                Login
            </a>
        </>
    );
};
