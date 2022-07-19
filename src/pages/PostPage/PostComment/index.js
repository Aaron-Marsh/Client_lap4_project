import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [repliesArray, setRepliesArray] = useState([]);
  const handleReplyInput = (e) => setReply(e.target.value);

  useEffect(() => {
    setRepliesArray(replies);
  }, []);

  const handleReplyEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://127.0.0.1:8000/forums/${postId}`,
        data: {
          method: "reply_message",
          username: username,
          reply: reply,
          message_id: messageId,
          reply_to: "john",
        },
      });

      setReply("");
    } catch (err) {}
  };

  return (
    <div className="message-box">
      <div className="message-open-reply"></div>
      <div className="message-content">
        <div className="message-username">{message_username}</div>
        <div className="message-message">{message}</div>
      </div>
      <div className="message-replies">
        <form className="message--reply-input" onSubmit={handleReplyEvent}>
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
        </form>
        {repliesArray.length > 0
          ? repliesArray.map((reply) => (
              <div className="message-reply">{reply.reply}</div>
            ))
          : ""}
      </div>
    </div>
  );
};
