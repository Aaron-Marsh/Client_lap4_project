import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";

import { login, setUser } from "../../actions";

export const ChildSignUpModal = (props) => {
  const [signup, setSignup] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    if (email === "" || password === "") {
      setError("Missing username or password!");
    } else if (password != confirmPassword) {
      setError("Passwords do not match!");
    } else {
      try {
        let registerDetails = {
          username,
          email,
          password,
        };
        let options = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://127.0.0.1:8000/users/register/",
          JSON.stringify(registerDetails),
          options
        );

        if (data.error) {
          setError(data.error);
        } else {
          props.onHide();
          dispatch(login());

          dispatch(setUser(registerDetails.userName));
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
          <div className="login-error">{error}</div>
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
