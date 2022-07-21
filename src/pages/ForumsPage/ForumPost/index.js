import React from "react";

export const ForumPost = ({ title, username, first_message, likeCount }) => {
  return (
    <div className="post-body">
      <h3>{title}</h3>
      <div className="thumb">👍 {likeCount}</div>
      <h4 className="post-author">{username}</h4>
      <p className="post-message">{first_message}</p>
    </div>
  );
};
