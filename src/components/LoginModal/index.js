import React, { useState } from 'react';
import { ChildSignUpModal } from '../ChildSignUp';
import { ChildLoginModal } from '../ChildLogin';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function LoginModal(props) {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {showSignUp ? (
                <ChildSignUpModal {...props} setShowSignUp={setShowSignUp} />
            ) : (
                <ChildLoginModal {...props} setShowSignUp={setShowSignUp} />
            )}
            {/* <Modal.Footer>
                <Button onClick={() => setShowSignUp(!showSignUp)}>
                    {showSignUp
                        ? 'login'
                        : "haven't created an account sign up"}
                </Button>
            </Modal.Footer> */}
        </Modal>
    );
}
