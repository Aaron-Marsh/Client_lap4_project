import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ChildSignUpModal = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = (e) => {};

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
      <Modal.Header className="align-items-center">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="register">
          <label htmlFor="register-username"></label>
          <input
            type="text"
            id="register-username"
            required
            placeholder="Username"
            onChange={onUsernameChange}
          />
          <label htmlFor="register-email"></label>
          <input
            type="text"
            id="register-email"
            required
            placeholder="Email"
            onChange={onEmailChange}
          />
          <label htmlFor="register-password"></label>
          <input
            type="password"
            id="register-password"
            required
            placeholder="Password"
            onChange={onPasswordChange}
          />
          <label htmlFor="confirm-register-password"></label>
          <input
            type="password"
            id="confirm-register-password"
            required
            placeholder="Confirm password"
            onChange={onConfirmPasswordChange}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onSignUp}>Sign up</button>
        <button id="toggle" onClick={() => props.setShowSignUp(false)}>
          Already have an account? Sign in
        </button>
      </Modal.Footer>
    </>
  );
};
