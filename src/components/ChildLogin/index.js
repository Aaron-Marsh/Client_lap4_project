import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ChildLoginModal(props) {
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
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Sign in</Button>
                <Button onClick={() => props.setShowSignUp(true)}>
                    Create account
                </Button>
            </Modal.Footer>
        </>
    );
}
