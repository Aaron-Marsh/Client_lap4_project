import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoginFooter, BackButton } from "../../components/index";
import { PostHeader } from "./PostHeader";
import { PostComments } from "./PostComments";
import { NewCommentForm } from "./NewCommentForm";
import axios from "axios";
import "./PostPage.css";

export const PostPage = () => {
  const [showLoginFooter, setShowLoginFooter] = useState(false);
  const username = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [postMessages, setPostMessages] = useState([]);
  const [post, setPost] = useState("");
  let { postId } = useParams();

  let serverURL = "https://read-herring.herokuapp.com";
  const loadData = async () => {
    try {
      const { data } = await axios.get(`${serverURL}/forums/${postId}`);
      // const pertinentPost = await data.filter((p)=>{
      //     return p.id === postId
      // })
      setPost(await data);
    } catch (err) {}
  };
  // get post data by id in route
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  useEffect(() => {
    if (post) {
      setPostMessages(post.messages);
      post.messages && post.messages.map((m) => {});
    }
    return () => {};
  }, [post]);

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

  return (
    <>
      <div className="container">
        <h2>PostPage</h2>
        <pre>Post ID: {postId}</pre>
        <PostHeader
          title={post.title}
          post_username={post.username}
          first_message={post.first_message}
        />
        <NewCommentForm
          postId={postId}
          onComment={loadData}
          username={username}
          loggedIn={loggedIn}
          serverURL={serverURL}
        />
        <BackButton/>
        {postMessages ? (
          <PostComments
            postMessages={postMessages}
            loggedIn={loggedIn}
            postId={postId}
            serverURL={serverURL}
            username={username}
          />
        ) : (
          <p>no comments yet</p>
        )}
      </div>
      {showLoginFooter ? <LoginFooter /> : ""}
    </>
  );
};
