import React, { useState } from "react";

export function LoginFooter() {
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
    </div>
  );
}
