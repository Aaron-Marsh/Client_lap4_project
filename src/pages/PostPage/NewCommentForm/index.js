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

  // Create New Comment
  const handleFormEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (message != "") {
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
        // pass comment update to PostPage/index.js
        onComment();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <form className="new-message-form" onSubmit={handleFormEvent}>
        <label htmlFor="message"></label>
        <textarea
          type="text"
          className="orange-input "
          id="message"
          name="message"
          placeholder="Add a comment here..."
          value={message}
          rows="4"
          cols="50"
          onChange={handleMessageInput}
        />
        <input 
        className="orange-button" 
        type="submit" 
        disabled={!loggedIn} 
        value="Post"/>
      </form>
    </>
  );
};
