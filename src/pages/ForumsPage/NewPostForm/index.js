import React, { useState, useRef } from "react";
import axios from "axios";

export const NewPostForm = ({ username, loggedIn, onCreate }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isWidth, setIsWidth] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isNewPostButton, setIsNewPostButton] = useState(true);

  const newPostRef = useRef(null);

  const handleShown = () => {
    setIsShown((current) => !current);
  };

  const handleWidth = () => {
    setIsWidth((current) => !current);
  };

  const handleNewPostButton = () => {
    setIsNewPostButton((current) => !current);
  };

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleMessageInput = (e) => setMessage(e.target.value);

  const handleFormEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleNewPostButton();
    handleWidth();
    handleShown();
    const serverUrl = "https://read-herring.herokuapp.com";
    try {
      const res = await axios({
        method: "post",
        url: `${serverUrl}/forums/`,
        data: {
          title: title,
          username: username,
          first_message: message,
        },
      });
    } catch (err) {}
    // refresh posts
    onCreate();
  };

  return (
    <div className="new-post-form-container-outer">
      {isNewPostButton ? (
        <button
          className="orange-button-wide"
          onClick={() => {
            handleShown();
            handleWidth();
            handleNewPostButton();
            setTimeout(() => {
              newPostRef.current.focus();
            }, 100);
          }}
        >
          Create New Post
        </button>
      ) : (
        <div className="new-post-form-container-inner">
          <form
            onSubmit={handleFormEvent}
            className={
              isShown && isWidth
                ? "new-post-input width-post"
                : "new-post-input "
            }
          >
            <label htmlFor="Title">Title</label>
            <input
              ref={newPostRef}
              className="orange-input"
              type="text"
              id="title"
              name="title"
              placeholder="Type here..."
              value={title}
              onChange={handleTitleInput}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type here..."
              value={message}
              onChange={handleMessageInput}
            />
            <input
              type="submit"
              className="orange-button post-button"
              disabled={!loggedIn}
              value="Post"
            />
          </form>
          <div
            className="close-new-post-field"
            onClick={() => {
              handleShown();
              handleWidth();
              handleNewPostButton();
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
