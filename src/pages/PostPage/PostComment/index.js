import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export const PostComment = ({
  message_username,
  message,
  replies,
  loggedIn,
  postId,
  serverURL,
  messageId,
  username,
}) => {
  const [reply, setReply] = useState("");
  const [isShown, setIsShown] = useState(false)
  const [repliesArray, setRepliesArray] = useState([]);
  const handleReplyInput = (e) => setReply(e.target.value);

  const handleShown = () => {
    setIsShown(current => !current)
    }

  useEffect(() => {
    setRepliesArray(replies.reverse());
  }, []);

  const handleReplyEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `http://127.0.0.1:8000/forums/${postId}`,
        data: {
          method: "reply_message",
          username: username,
          reply: reply,
          message_id: messageId,
          reply_to: "",
        },
      });
      setRepliesArray((current) => [data,...current]);

      setReply("");
    } catch (err) {}
  };
  useEffect(() => {
    console.log(repliesArray);
  }, [repliesArray]);

  return (
    <div className="message-box">
      <div className="message-open-reply"></div>
      <div className="message-content">

        <div className="message-line"></div>
        <div>
          <a
            className="message-username"
            href={`http://localhost:3000/profile/message_username`}
          >

            {message_username}
          </Link>
        </div>
        <div className="message-message">{message}</div>
      </div>
      {!isShown && <button onClick={handleShown}>Reply</button>}
      <div className="message-replies">
        {isShown && <form className="message--reply-input" onSubmit={handleReplyEvent}>
          <label htmlFor="reply"></label>
          <input
            type="text"
            id="reply"
            name="reply"
            placeholder="Type here..."
            value={reply}
            onChange={handleReplyInput}
          />
          <input type="submit" disabled={!loggedIn} />
        </form>}
        {repliesArray.length > 0
          ? repliesArray.map((reply) => (
              <div className="message-reply">{reply.reply}</div>
            ))
          : ""}
      </div>
    </div>
  );
};
