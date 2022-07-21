import React from "react";
import { Link } from "react-router-dom";

export const PostHeader = ({
  title,
  postUsername,
  username,
  loggedIn,
  first_message,
  onDelete,
}) => {
  return (
    <div className="post-header">
      <h3>{title}</h3>
      <h5>
        <Link
          className="post-author"
          data-testid="message-username"
          to={`/profile/${postUsername}`}
        >
          {postUsername}
        </Link>
      </h5>
      <p>{first_message}</p>
      {postUsername == username && loggedIn && (
        <div className="delete-thread" onClick={() => onDelete()}>
          X
        </div>
      )}
    </div>
  );
};
