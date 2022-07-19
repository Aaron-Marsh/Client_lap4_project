import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { SearchBar, LoginFooter } from "../../components/";
import { ForumPosts } from "./ForumPosts";
import { NewPostForm } from "./NewPostForm";
import "./ForumsPage.css";

export const ForumsPage = () => {
  const [showLoginFooter, setShowLoginFooter] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const username = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [posts, setPosts] = useState([]);

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

  // Hardcoded URL for now until we can get the env detection working!!!
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let myURL = "https://read-herring.herokuapp.com";
        const { data } = await axios.get(`${myURL}/forums/`);
        data.map((d, idx) => {
          d.key = idx;
        });

        setPosts(data);
      } catch (err) {
        throw new Error(err.message);
      }
    };
    fetchPosts();
  }, []);

  const fetchForums = async (searchTerm) => {
    try {
      const sendData = {
        query_type: "intitle",
        query: searchTerm,
        num_results: "12",
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(sendData),
        options
      );
      setPosts(data);
      setHasSearched(true);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <>
      <div className="forum-page-container">
        <div className="container header-space">
          <SearchBar getResults={fetchForums} />
          <NewPostForm username={username} loggedIn={loggedIn} />
          <ForumPosts posts={posts} />
        </div>
        {showLoginFooter ? <LoginFooter /> : ""}
      </div>
    </>
  );
};
