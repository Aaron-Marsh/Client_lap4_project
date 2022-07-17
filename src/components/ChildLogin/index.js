import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import button from "react-bootstrap/button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../actions";

export const ChildLoginModal = (props) => {
  //Forms
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Redux

  const dispatch = useDispatch();

  const onSignIn = (e) => {
    try {
      if (username === "" || password === "") {
        setError("Missing username or password!");
      } else {
        //Server request will go here to check for an account
        dispatch(login());
      }
    } catch (err) {
      if (!err.response) {
        setError("No server response!");
      } else if (err.response.status === 401) {
        setError(
          "Unauthorized! Create an account or check your username and password!"
        );
      } else {
        setError("Login failed!");
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
      <Modal.Header className="align-items-center"></Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Log In
        </Modal.Title>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              autoFocus
              onChange={onUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <button>Sign in</button>
          ) : (
            <button onClick={props.onHide}>Sign in</button>
          )}
        </div>
        <button id="toggle" onClick={() => props.setShowSignUp(true)}>
          Create account
        </button>
      </Modal.Footer>
    </>
  );
};
