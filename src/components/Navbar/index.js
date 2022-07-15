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
      <div className="logo">
        <img className="logo-image" src={require("../../imgs/logo.png")}></img>
      </div>
      <nav>
        <ul id="nav-items" className="nav-items" data-visible="false">
          <div>
            <NavLink
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
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
                color: isActive ? "red" : "",
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
                color: isActive ? "red" : "",
              })}
              to="/forum"
            >
              Forum
            </NavLink>
          </div>
          <div>
            <NavLink
              className="link"
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
              to="/login"
            >
              Login
              {/* supp</div>osed to be modal but will be fixed later */}
            </NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
};
