import React from "react";
import { useNavigate } from "react-router-dom";

export function HomeIntro() {

  const goto = useNavigate();

  return (
    <div className="home" id="home-intro">
      <div className="home-intro">
        <h2 className="subheading">Let us get you hooked</h2>
        <p className="home-intro-text">
          Read Herring allows you to find those words that have been missing
          from your life. You can search for books, find others who like what
          you like and get in touch, and also write all the fan theories you have conjured in our forum.
        </p>
        <p className="home-intro-text-bold">Get Reading!</p>
        <button 
          className="dark-light-button-wide"
          onClick={() => goto('../books')}
        >Find Books Nows!</button>
        <div className="home-intro-image"></div>
      </div>
      <div className="home-book"></div>
    </div>
  );
}
