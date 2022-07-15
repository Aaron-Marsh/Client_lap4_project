import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const goTo = useNavigate();
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
    <header className="navbar">
      <button
        className="mobile-nav-button no-select"
        aria-controls="nav-items"
        aria-expanded="false"
        data-open="false"
      >
        <span className="sr-only">Menu</span>
      </button>
      <NavLink to="/" className="logo">
        <img className="logo-image" src={require("../../imgs/logo.png")}></img>
      </NavLink>
      <nav>
        <ul id="nav-items" className="nav-items" data-visible="false">
          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/"
          >
            <div class="cloud">Home</div>
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/books"
          >
            <div class="cloud">Books</div>
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/forum"
          >
            <div class="cloud">Forum</div>
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/login"
          >
            <div class="cloud">Login</div>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
