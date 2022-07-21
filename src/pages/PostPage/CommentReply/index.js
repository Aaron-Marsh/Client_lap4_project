import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// COMMENT REPLY
// This component needs edit and delete functions

export const CommentReply = ({
    username,
    loggedIn,
    replyId,
    replyUsername,
    replyText,
    replyTo,
    postId,
    serverURL,
    onDelete
    
}) => {

   // EDIT REPLY
    // Edit Reply Section
  const [editReply, setEditReply] = useState("");
  const [currentReplyText, setCurrentReplyText] = useState("");
  
  useEffect(()=>{
    setCurrentReplyText(replyText)
  },[replyText])
    // Edit Button Section ******************************************
    const handleEditButton = () => {
        setEditReply(currentReplyText);
        handleEditShown();
        handleEditWidth();
    };

    // Form Show
    const [isEditShown, setIsEditShown] = useState(false);
    const [isEditWidth, setIsEditWidth] = useState(false);
    const handleEditShown = () => setIsEditShown((current) => !current);
    const handleEditWidth = () => setIsEditWidth((current) => !current);

    // Edit Reply Input Handler
    const handleEditReplyInput = (e) => setEditReply(e.target.value);

    // Edit Reply Handler
    const handleEditReplyEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const handleEditReply = async () => {

        try {
          const { data } = await axios({
            method: "PATCH",
            url: `${serverURL}/forums/${postId}`,
            data: {
                method: "reply_message",
                username: username,
                reply: editReply,
                reply_id: replyId,
                reply_to: ""
              },
            });
          } catch (err) {
            throw new Error(err.message);
          }
        }
    handleEditReply();
    handleEditButton();
    setCurrentReplyText(editReply);
    };

    return (
        <div className="reply-content">
            <div className="reply-header">
                <Link
                    className="reply-username"
                    to={`/profile/${replyUsername}`}
                >
                    {replyUsername}
                </Link>
            </div>
            <div className="reply-message" id={replyId}>
                {currentReplyText}
            </div>

            {/* Show delete button if correct user */}
            {((replyUsername === username) && (loggedIn)) && (
                <div className="reply-footer">
                    <span
                        className="edit-reply"
                        onClick={() => handleEditButton(replyId)}
                    >
                        Edit
                    </span>
                    <span
                        className="delete-reply"
                        onClick={() => onDelete(replyId)}
                    >
                        Delete
                    </span>
                </div>
            )}
            <form
                className={
                    isEditShown && isEditWidth
                        ? "edit-reply-form width"
                        : "edit-reply-form"
                }
                onSubmit={handleEditReplyEvent}
            >
                <label htmlFor="reply"></label>
                <input
                    type="text"
                    id="reply"
                    name="reply"
                    className="orange-input"
                    placeholder="Add your reply..."
                    value={editReply}
                    onChange={handleEditReplyInput}
                />
                <input
                    className="orange-button"
                    type="submit"
                    value="Send"
                    disabled={!loggedIn}
                />
            </form>
        </div>
    );
};
