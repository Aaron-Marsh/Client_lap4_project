import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../LoginModal";
// import {  useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";

export const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  function toggle() {
    let navItems = document.querySelector(".nav-items");
    let navButton = document.querySelector(".mobile-nav-button");

    let navLink = document.querySelectorAll(".link");

    for (let i = 0; i < navLink.length; i++) {
      navLink[i].addEventListener("click", toggle);
    }

    navButton.addEventListener("click", toggle);

    const visible = navItems.getAttribute("data-visible");

    if (visible === "false") {
      navItems.setAttribute("data-visible", "true");
      navButton.setAttribute("data-open", "true");
      navButton.setAttribute("aria-expanded", "true");
    } else if (visible === "true") {
      navItems.setAttribute("data-visible", "false");
      navButton.setAttribute("data-open", "false");
      navButton.setAttribute("aria-expanded", "false");
    }
  }
  useEffect(() => {
    toggle();
  }, []);

  const handleLoginClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <header className="navbar">
        <button
          className="mobile-nav-button no-select"
          aria-controls="nav-items"
          aria-expanded="false"
          data-open="false"
        >
          <span className="sr-only">Menu</span>
        </button>
        <NavLink className="logo" to="/">
          <img
            className="logo-image"
            src={require("../../imgs/logo.png")}
          ></img>
        </NavLink>
        <nav>
          <ul id="nav-items" className="nav-items" data-visible="false">
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "rgba(246, 107, 0, 0.9)" : "",
                })}
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "rgba(246, 107, 0, 0.9)" : "",
                })}
                to="/books"
              >
                Books
              </NavLink>
            </div>
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "rgba(246, 107, 0, 0.9)" : "",
                })}
                to="/forums"
              >
                Forum
              </NavLink>
            </div>
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: loggedIn
                    ? isActive
                      ? "rgba(246, 107, 0, 0.9)"
                      : ""
                    : "",
                })}
                onClick={loggedIn ? "" : () => setModalShow(true)}
                to={loggedIn ? "/profile" : {}}
              >
                {loggedIn ? "Profile" : "Sign in"}
              </NavLink>
            </div>
          </ul>
        </nav>
      </header>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
