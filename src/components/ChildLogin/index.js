import React, { useState } from "react";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import { login, setUser } from "../../actions";

export const ChildLoginModal = (props) => {
  //Forms
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Redux

  const dispatch = useDispatch();

  const onSignIn = async (e) => {
    if (userInput === "" || password === "") {
      setError("Missing username/email or password!");
    } else {
      try {
        let userDetails = {
          userInput,
          password,
        };
        let options = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://127.0.0.1:8000/users/login/",
          JSON.stringify(userDetails),
          options
        );
        if (data.error) {
          setError(data.error);
        } else {
          props.onHide();
          dispatch(login());

          dispatch(setUser(data.username));
        }

        /* loginError.textContent = "Incorrect email or password"; */
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
    }
  };

  const onUserInputChange = (e) => {
    setUserInput(e.target.value);
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
          <label htmlFor="login-input"></label>
          <input
            type="text"
            id="login-input"
            required
            placeholder="Email or Username"
            onChange={onUserInputChange}
            aria-label="login-email"
          />
          <label htmlFor="login-password"></label>
          <input
            type="password"
            id="login-password"
            required
            placeholder="Password"
            onChange={onPasswordChange}
            aria-label="password"
          />
          <div className="login-error">{error}</div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onSignIn}>Sign in</button>
        <button
          id="toggle"
          aria-label="toggle-to-sign-up"
          onClick={() => props.setShowSignUp(true)}
        >
          Create account
        </button>
      </Modal.Footer>
    </>
  );
};
