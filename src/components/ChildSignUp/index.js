import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const ChildSignUpModal = (props) => {
    const [signup, setSignup] = useState(null);

    function handleChange(evt) {
        const value = evt.target.value;
        setSignup({
            ...signup,
            [evt.target.name]: value,
        });
    }

    return (
        <>
            <Modal.Header className="align-items-center">
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Sign up</button>
                <button id="toggle" onClick={() => props.setShowSignUp(false)}>
                    Already have an account? Sign in
                </button>
            </Modal.Footer>
        </>
    );
};
