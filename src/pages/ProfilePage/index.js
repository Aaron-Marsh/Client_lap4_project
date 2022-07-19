import React, { useState, useEffect } from "react";

import { LoginFooter, Profile } from "../../components";

export const ProfilePage = () => {
  const [showLoginFooter, setShowLoginFooter] = useState(false);

  useEffect(() => {
    let myScrollFunc = function () {
      let y = window.scrollY;
      if (y >= 10) {
        setShowLoginFooter(true);
      } else {
        setShowLoginFooter(false);
      }
    };

    window.addEventListener("scroll", myScrollFunc);

    return () => {
      window.removeEventListener("scroll", myScrollFunc);
    };
  }, []);

  return (
    <>
      <Profile />
      {showLoginFooter ? <LoginFooter /> : ""}
    </>
  );
};
