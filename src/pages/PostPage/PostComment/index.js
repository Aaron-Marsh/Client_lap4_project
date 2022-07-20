import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  const [isShown, setIsShown] = useState(false);
  const [isReplyButton, setIsReplyButton] = useState(true);
  const [isWidth, setIsWidth] = useState(false);
  const [repliesArray, setRepliesArray] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const replyRef = useRef(null);

  let clicked = false;
  let width = false;

  const handleReplyInput = (e) => setReply(e.target.value);
  const handleWidth = () => {
    setIsWidth((current) => !current);
  };
  const handleShown = () => {
    setIsShown((current) => !current);
  };
  const handleReplyButton = () => {
    setIsReplyButton((current) => !current);
  };

  useEffect(() => {
    setRepliesArray(replies);
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
      setRepliesArray((current) => [...current, data]);

      setReply("");
    } catch (err) {}
  };

  const handleDeleteReplyEvent = async () => {
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `http://127.0.0.1:8000/forums/${postId}`,
        data: {
          method: "delete_message",

          message_id: messageId,
        },
      });
      console.log(message_username, username);
      setDeleted(true);
    } catch (err) {}
  };

  return (
    <>
      {" "}
      {!deleted && (
        <div className="message-box">
          {message_username == username && loggedIn ? (
            <div
              className="delete-message"
              onClick={() => {
                handleDeleteReplyEvent();
              }}
            ></div>
          ) : (
            ""
          )}
          <div className="message-content">
            <div
              className="message-line"
              onClick={() => {
                clicked
                  ? document
                      .getElementById(messageId)
                      .classList.remove("hide-reply")
                  : document
                      .getElementById(messageId)
                      .classList.add("hide-reply");
                clicked = !clicked;
              }}
            ></div>
            <div>
              <Link
                className="message-username"
                to={`/profile/${message_username}`}
              >
                {message_username}
              </Link>
            </div>
            <div className="message-message">{message}</div>
          </div>
          <div className="reply-container" id={messageId}>
            {repliesArray.length > 0
              ? repliesArray.map((reply) => (
                  <div className="reply-content">
                    <div>
                      <Link
                        className="message-username"
                        to={`/profile/${reply.username}`}
                      >
                        {reply.username}
                      </Link>
                    </div>
                    <div className="reply-message" id={reply.id}>
                      {reply.reply}
                    </div>
                  </div>
                ))
              : ""}
            <div className="reply-form-container">
              {!isReplyButton ? (
                ""
              ) : (
                <button
                  className="white-button"
                  onClick={() => {
                    handleShown();
                    handleWidth();
                    handleReplyButton();
                    setTimeout(() => {
                      replyRef.current.focus();
                    }, 100);
                  }}
                >
                  Reply
                </button>
              )}
              <div className="message-replies">
                <form
                  className={
                    isShown
                      ? isWidth
                        ? "message-reply-input width"
                        : "message-reply-input "
                      : "message-reply-input"
                  }
                  onSubmit={handleReplyEvent}
                >
                  <label htmlFor="reply"></label>
                  <input
                    ref={replyRef}
                    type="text"
                    id="reply"
                    name="reply"
                    className="orange-input"
                    placeholder="Add your reply..."
                    value={reply}
                    onChange={handleReplyInput}
                  />
                  <input
                    className="orange-button"
                    type="submit"
                    disabled={!loggedIn}
                  />
                  <div
                    className="close-reply-field"
                    onClick={() => {
                      handleShown();
                      handleWidth();
                      handleReplyButton();
                    }}
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
