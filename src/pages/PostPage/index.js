import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoginFooter, BackButton } from "../../components/index";
import { PostHeader } from "./PostHeader";
import { PostComments } from "./PostComments";
import { NewCommentForm } from "./NewCommentForm";
import axios from "axios";
import "./style.css";

export const PostPage = () => {
  const username = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [postMessages, setPostMessages] = useState([]);
  const [post, setPost] = useState("");
  let { postId } = useParams();

  const loadData = async () => {
    try {
      let myURL = "https://read-herring.herokuapp.com";
      const { data } = await axios.get(`${myURL}/forums/${postId}`);
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
        />
        <BackButton/>
        {postMessages ? (
          <PostComments postMessages={postMessages} test="test" />
        ) : (
          <p>no comments yet</p>
        )}
      </div>
      <LoginFooter />
    </>
  );
};
