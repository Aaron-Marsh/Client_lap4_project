import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const goTo = useNavigate();

  return (
    <button
      className="dark-light-button"
      id="back-button"
      onClick={() => goTo(-1)}
      style={{ cursor: "pointer" }}
    >
      Back
    </button>
  );
};
