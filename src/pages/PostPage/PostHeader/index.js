import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const PostHeader = ({
  title,
  postUsername,
  username,
  loggedIn,
  first_message,
  likes,
  onDelete,
  serverURL,
  postId,
}) => {
  const [dataLikes, setDataLikes] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (likes) {
      setDataLikes(likes);
    }
  }, [likes]);

  useEffect(() => {
    setLikeCount(dataLikes.length);
  }, [dataLikes]);

  useEffect(() => {
    // If user is in the dataLikes array after a click
    if (dataLikes.includes(username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [dataLikes]);

  // const handleLikeIncrement = () => {
  //   setLikeCount(current => current + 1)
  //   toggleLiked();
  // };
  // const handleLikeDecrement= () => {
  //   setLikeCount(current => current - 1)

  // };

  const handleLikedClick = async () => {
    if (loggedIn) {
      try {
        const { data } = await axios({
          method: "PATCH",
          url: `${serverURL}/forums/${postId}`,
          data: {
            method: "edit_thread_likes",
            add_not_take: !liked,
            username: username,
          },
        });

        setDataLikes(data);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  };

  return (
    <div className="post-header">
      <div className="post-header-container">
        <h3>{title}</h3>
        {loggedIn ? (
          <div className="like-container">
            <div className="thumb" onClick={handleLikedClick}>
              👍
            </div>
            <div>{likeCount}</div>
          </div>
        ) : (
          ""
        )}
      </div>
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
