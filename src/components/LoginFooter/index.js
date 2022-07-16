import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { close } from "../../actions";

export function LoginFooter() {
  const footerClose = useSelector((state) => state.footerClose);
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  if (footerClose || loggedIn) {
    return "";
  } else {
    return (
      <div className="login-footer">
        <div className="login-footer-text">
          <h4>Don't miss out on your next favourite book</h4>
          <p>Sign in or sign up now to discuss all those red herrings!</p>
        </div>
        <div className="login-footer-buttons">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
        <button
          onClick={() => dispatch(close())}
          className="login-footer-close"
        >
          <span className="sr-only">Close log in footer</span>
        </button>
      </div>
    );
  }
}
