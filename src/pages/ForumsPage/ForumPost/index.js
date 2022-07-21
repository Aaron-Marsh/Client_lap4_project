import React from "react";
import { Link } from "react-router-dom";

export const ForumPost = ({ title, username, first_message, likeCount }) => {
  return (
    <div className="post-body">
      <div className="post-header-container">
        <h3>{title}</h3>
        <div className="like-container">
          <div>👍 </div>
          <div>{likeCount}</div>
        </div>
      </div>
      <Link
        className="post-author"
        data-testid="message-username"
        to={`/profile/${username}`}
      >
        {username}
      </Link>
      <p className="post-message">{first_message}</p>
    </div>
  );
};
