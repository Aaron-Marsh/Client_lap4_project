import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../LoginModal";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const loggedIn = useSelector((state) => state.loggedIn);
  const username = useSelector((state) => state.user.user);

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
                  borderBottom: isActive ? "4px solid white" : "",
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
                  borderBottom: isActive ? "4px solid white" : "",
                })}
                to="/forums"
              >
                Forum
              </NavLink>
            </div>
            <div>
              {!loggedIn ? (
                <a
                  className="link"
                  onClick={loggedIn ? "" : () => setModalShow(true)}
                >
                  {loggedIn ? "Profile" : "Sign in"}
                </a>
              ) : (
                <NavLink
                  className="link"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    borderBottom: isActive ? "4px solid white" : "",
                  })}
                  to={{
                    pathname: "/profile/" + username,
                  }}
                >
                  {loggedIn ? "Profile" : "Sign in"}
                </NavLink>
              )}
            </div>
            <div></div>
          </ul>
        </nav>
      </header>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
