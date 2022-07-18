import React, { useState } from "react";
import axios from "axios";
export const NewCommentForm = ({
  postId,
  onComment,
  username,
  loggedIn,
  serverURL,
}) => {
  const [message, setMessage] = useState("");
  const handleMessageInput = (e) => setMessage(e.target.value);

  const handleFormEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const res = await axios({
        method: "patch",
        url: `${serverURL}/forums/${postId}`,
        data: {
          method: "thread_message",
          username: username,
          message: message,
        },
      });

      setMessage("");
      onComment();
    } catch (err) {}
  };

  return (
    <>
      <p>New Comment:</p>

      <form onSubmit={handleFormEvent}>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Type here..."
          value={message}
          onChange={handleMessageInput}
        />
        <input type="submit" disabled={!loggedIn} />
      </form>
    </>
  );
};
