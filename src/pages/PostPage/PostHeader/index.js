import React from "react";

export const PostHeader = ({ title, post_username, first_message }) => {
  return (
    <div className="container post-header">
      <h3>{title}</h3>
      <h5>
        Author:{" "}
        <a href="http://localhost:3000/profile/{post_username}">
          {post_username}
        </a>
      </h5>
      <p>{first_message}</p>
    </div>
  );
};
