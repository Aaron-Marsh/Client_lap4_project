import React, { useState, useEffect } from "react";
import { ChildSignUpModal } from "../ChildSignUp";
import { ChildLoginModal } from "../ChildLogin";
import Modal from "react-bootstrap/Modal";

export const LoginModal = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const { registershow, show, onHide } = props;
  useEffect(() => {
    setShowSignUp(registershow);
  }, [props]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {showSignUp ? (
        <ChildSignUpModal onHide={onHide} setShowSignUp={setShowSignUp} />
      ) : (
        <ChildLoginModal onHide={onHide} setShowSignUp={setShowSignUp} />
      )}
    </Modal>
  );
};
