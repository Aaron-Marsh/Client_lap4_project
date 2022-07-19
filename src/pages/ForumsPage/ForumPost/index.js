import React from "react";

export const ForumPost = ({ title, username, first_message }) => {
  return (
    <div className="post-body">
      <h3>{title}</h3>
      <h4 className="post-author">{username}</h4>
      <p className="post-message">{first_message}</p>
    </div>
  );
};
