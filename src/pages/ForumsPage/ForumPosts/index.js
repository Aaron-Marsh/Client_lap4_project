import React, { useState, useEffect } from "react";
import { ForumPost } from "../ForumPost";
import { Link } from "react-router-dom";

export const ForumPosts = ({ posts }) => {

  const [currentPosts,setCurrentPosts] = useState([])

  useEffect(()=> {
    setCurrentPosts(posts)
  },[posts])

  return (
    <div className="posts-container">
      {currentPosts.map((p) => (
        <Link
          className="link"
          to={{
            pathname: "/forums/" + p.id,
          }}
        >
          <ForumPost
            title={p.title}
            username={p.username}
            first_message={p.first_message}
          />
        </Link>
      ))}
    </div>
  );
};
