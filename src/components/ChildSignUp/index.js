import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const ChildSignUpModal = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <>
            <Modal.Header closeButton d-flex className="align-items-center">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="ms-auto"
                >
                    Sign Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            onChange={onEmailChange}
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
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Confirm password"
                            autoFocus
                            onChange={onConfirmPasswordChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sign up</Button>
                <Button id="toggle" onClick={() => props.setShowSignUp(false)}>
                    Already have an account? Sign in
                </Button>
            </Modal.Footer>
        </>
    );
};
