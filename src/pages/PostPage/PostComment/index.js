import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CommentReplies } from "../CommentReplies";

export const PostComment = ({
  username,
  loggedIn,
  messageId,
  messageUsername,
  message,
  replies,
  postId,
  serverURL,
  onDelete,
}) => {
  // POST COMMENT
  // This component has the edit comment function
  // Passes reply data to CommentReplies
  // Passed onDelete as a prop to PostComments

  // Edit Post Section ===========================================
  // Edit Messages Section
  const [isEditShown, setIsEditShown] = useState(false);
  const [editComment, setEditComment] = useState("");
  const [isEditWidth, setIsEditWidth] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  // Edit Button Section ******************************************
  const handleEditButton = () => {
    setEditComment(message);
    handleEditShown();
    handleEditWidth();
  };

  // Form Show & Width
  const handleEditShown = () => setIsEditShown((current) => !current);
  const handleEditWidth = () => setIsEditWidth((current) => !current);

  // Edit Reply Input Handler
  const handleEditComment = (e) => setEditComment(e.target.value);

  // Update Comment Text On Render passed down from PostComments
  useEffect(() => setCurrentMessage(message), [message]);

  // Edit Comment **********************************************
  const handleEditEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `${serverURL}/forums/${postId}`,
        data: {
          method: "thread_message",
          username: username,
          message: editComment,
          message_id: messageId,
        },
      });
      // setRepliesArray((current) => [...current, data]);
    } catch (err) {
      throw new Error(err.message);
    }
    handleEditButton();
    setCurrentMessage(editComment);
  };

  let lineClickedBoolean = false;

    return (
        <>
            {/* main message conatiner */}
            <div className="message-box">
                {/* Show delete button if correct user */}
                {((messageUsername === username) && (loggedIn)) ? (
                    <div
                        className="delete-message"
                        onClick={() => onDelete(messageId)}
                    ></div>
                ) : (
                    ""
                )}

        <div className="message-content">
          {/* line button that hides/reveals replies */}
          {replies.length > 0 && (
            <div
              className="message-line"
              onClick={() => {
                lineClickedBoolean
                  ? document
                      .getElementById(messageId)
                      .classList.remove("hide-reply")
                  : document
                      .getElementById(messageId)
                      .classList.add("hide-reply");
                lineClickedBoolean = !lineClickedBoolean;
              }}
            ></div>
          )}
          {/* MESSAGE USERNAME */}
          <div className="message-header">
            <Link
              className="message-username"
              to={`/profile/${messageUsername}`}
            >
              {messageUsername}
            </Link>
            {/* EDIT BUTTON TO SHOW FORM */}
            {messageUsername == username && loggedIn ? (
              <button onClick={handleEditButton}>edit</button>
            ) : (
              ""
            )}
          </div>

          {/* MESSAGE MESSAGE */}
          {/* LOGIC FOR EDIT MESSAGE FORM */}
          {isEditShown && isEditWidth ? (
            // EDIT MESSAGE FORM
            <div className="reply-form-container width">
              <form onSubmit={handleEditEvent}>
                <label htmlFor="edit"></label>
                <input
                  type="text"
                  id="edit"
                  name="edit"
                  className="orange-input"
                  onChange={handleEditComment}
                  value={editComment}
                ></input>
                <input
                  type="submit"
                  value="Save"
                  className="orange-button"
                  disabled={!loggedIn}
                ></input>
                <div
                  className="close-edit-field"
                  onClick={handleEditButton}
                ></div>
              </form>
            </div>
          ) : (
            // Pass in message content from PostComments
            <div className="message-message">{currentMessage}</div>
          )}
        </div>

        {/* *************** Render Comments ********************* */}
        <div className="reply-container" id={messageId}>
          <CommentReplies
            id={messageId}
            username={username}
            loggedIn={loggedIn}
            postId={postId}
            replies={replies}
            messageId={messageId}
            serverURL={serverURL}
          />
        </div>
      </div>
    </>
  );
};
