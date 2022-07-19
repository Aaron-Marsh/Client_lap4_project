import React, { useState, useEffect } from "react";
import { ForumPost } from "../ForumPost";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";

export const ForumPosts = ({ posts }) => {
  return (
    <div className="post-wrapper">
      {posts.map((p) => (
        <Link
          className="link-body"
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
