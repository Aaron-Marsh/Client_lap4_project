import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { LoginFooter, BackButton } from "../../components/index";
import { PostHeader } from "./PostHeader";
import { PostComments } from "./PostComments";
import { NewCommentForm } from "./NewCommentForm";
import axios from "axios";
import "./PostPage.css";

export const PostPage = () => {
  const username = useSelector((state) => state.user.data.username);
  const loggedIn = useSelector((state) => state.loggedIn);
  const goTo = useNavigate();
  const [showLoginFooter, setShowLoginFooter] = useState(false);
  const [post, setPost] = useState("");
  let { postId } = useParams();

  // ***************** HARDCODE SERVER URL ********************
  let serverURL = "https://read-herring.herokuapp.com";

  const loadData = async () => {
    try {
      const reqUrl = `${serverURL}/forums/${postId}`;
      const { data } = await axios.get(reqUrl);
      setPost(await data);
    } catch (err) {}
  };

  // get post data by id in route
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  //Footer stuff
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

  const handleDeletePost = () => {
    const deletePost = async () => {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${serverURL}/forums/${postId}`,
        });
        // setRepliesArray((current) => [...current, data]);
      } catch (err) {
        throw new Error(err.message);
      }
    };
    deletePost();
    goTo("../forums");
  };

  return (
    <>
      <h1>Welcome to post page</h1>
      <div className="post-page-container">
        <div className="container header-space">
          <BackButton />
          {/* The Main Post Message */}
          <PostHeader
            username={username}
            loggedIn={loggedIn}
            title={post.title}
            postUsername={post.username}
            first_message={post.first_message}
            likes={post.likes}
            onDelete={handleDeletePost}
            serverURL={serverURL}
            postId={postId}
          />
          {/* Form for adding new comments */}
          <NewCommentForm
            username={username}
            loggedIn={loggedIn}
            postId={postId}
            onComment={loadData}
            serverURL={serverURL}
          />
          {/* If post has comments, render comments */}
          {/* Pass in comments data, main post id, username/login status */}
          <PostComments
            username={username}
            loggedIn={loggedIn}
            post={post}
            postId={postId}
            serverURL={serverURL}
          />
        </div>
        {showLoginFooter ? <LoginFooter /> : ""}
      </div>
    </>
  );
};
