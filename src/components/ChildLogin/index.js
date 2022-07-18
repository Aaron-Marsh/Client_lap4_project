import React, { useState } from "react";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import { login, setUser } from "../../actions";

export const ChildLoginModal = (props) => {
  //Forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Redux

  const dispatch = useDispatch();

  const onSignIn = (e) => {
    try {
      if (email === "" || password === "") {
        setError("Missing username or password!");
      } else {
        let userDetails = {
          email,
          password,
        };

        props.onHide();
        dispatch(login()); /* axios
        /*         dispatch(setUser(response.user));
         
          .post(
            "http://127.0.0.1:8000/users/login/",
            JSON.stringify(userDetails)
          )
          .then((response) => {})
          .catch((error) => {
            throw Error(error);
          }); */
        /* loginError.textContent = "Incorrect email or password"; */
      }
    } catch (err) {
      if (!err.response) {
        setError("No server response!");
      } else if (err.response.status === 401) {
        setError(
          "Unauthorized! Create an account or check your email and password!"
        );
      } else {
        setError("Login failed!");
      }
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
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
        <form className="login">
          <label htmlFor="login-email"></label>
          <input
            type="text"
            id="login-email"
            required
            placeholder="Email"
            onChange={onEmailChange}
          />
          <label htmlFor="login-password"></label>
          <input
            type="password"
            id="login-password"
            required
            placeholder="Password"
            onChange={onPasswordChange}
          />
          <div className="login-error"></div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onSignIn}>Sign in</button>
        <button id="toggle" onClick={() => props.setShowSignUp(true)}>
          Create account
        </button>
      </Modal.Footer>
    </>
  );
};
