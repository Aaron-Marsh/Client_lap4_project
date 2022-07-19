import React from "react";
import { Link } from "react-router-dom";

export const PostHeader = ({ title, post_username, first_message }) => {
  return (
    <div className="post-header">
      <h3>{title}</h3>
      <h5>
        <Link
          className="post-author"
          data-testid="message-username"
          to={`/profile/${post_username}`}
        >
          {post_username}
        </Link>
      </h5>
      <p>{first_message}</p>
    </div>
  );
};
