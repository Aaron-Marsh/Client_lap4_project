import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export function ChildLoginModal(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile', { replace: true });
    };

    const onSignIn = (e) => {
        try {
            if (username === '' || password === '') {
                setError('Missing username or password!');
            } else {
                navigateToProfile();
            }
        } catch (err) {
            if (!err.response) {
                setError('No server response!');
            } else if (err.response.status === 401) {
                setError(
                    'Unauthorized! Create an account or check your username and password!'
                );
            } else {
                setError('Login failed!');
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
            <Modal.Header
                closeButton
                d-flex
                className="align-items-center"
            ></Modal.Header>
            <Modal.Body>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="ms-auto"
                >
                    Log In
                </Modal.Title>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            autoFocus
                            onChange={onUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            autoFocus
                            onChange={onPasswordChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div onClick={onSignIn}>
                    {error ? (
                        <Button>Sign in</Button>
                    ) : (
                        <Button onClick={props.onHide}>Sign in</Button>
                    )}
                </div>
                <Button onClick={() => props.setShowSignUp(true)}>
                    Create account
                </Button>
            </Modal.Footer>
        </>
    );
}
