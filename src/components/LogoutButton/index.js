import React from "react";
import { useDispatch } from "react-redux";

import { setUser, logout } from "../../actions";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogoutButtonClick = () => {
    dispatch(
      setUser({
        data: {
          username: "",
          email: "",
          about_me: "",
          has_read: [],
          wants_to_read: [],
        },
      })
    );
    dispatch(logout());
  };

  return (
    <>
      <button className="white-button" onClick={onLogoutButtonClick}>
        Logout
      </button>
    </>
  );
};
