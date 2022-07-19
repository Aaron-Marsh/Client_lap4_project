import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchBar, LoginFooter } from "../../components/index";
import { ForumPosts } from './ForumPosts'
import { NewPostForm } from './NewPostForm'
import './ForumsPage.css'
export const ForumsPage = () => {
  const username = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.loggedIn);

  const [showLoginFooter, setShowLoginFooter] = useState(false);

  useEffect(() => {
    let myScrollFunc = function () {
      let y = window.scrollY;
      if (y >= 100) {
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
      <div className="container">
        <h2>Forums page</h2>
        <SearchBar />
        <NewPostForm username={username} loggedIn={loggedIn} />
        <ForumPosts />
      </div>
      {showLoginFooter ? <LoginFooter /> : ""}
    </>
  );
};
