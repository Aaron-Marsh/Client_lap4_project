import React, { useState } from 'react';
import { ChildSignUpModal } from '../ChildSignUp';
import { ChildLoginModal } from '../ChildLogin';
import Modal from 'react-bootstrap/Modal';

export const LoginModal = (props) => {
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
        </Modal>
    );
};
