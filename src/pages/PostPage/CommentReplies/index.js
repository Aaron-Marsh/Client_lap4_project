import React, { useState, useEffect, useRef } from "react";
import { CommentReply } from "../CommentReply";
import { NewReplyForm } from "../NewReplyForm";
import axios from "axios";

// COMMENT REPLIES
// This component needs a useState for current replies
// Passes specific reply data to CommentReply

// props from PostComments
export const CommentReplies = ({
  username,
  loggedIn,
  postId,
  replies,
  messageId,
  serverURL,
}) => {
  const [currentReplies, setCurrentReplies] = useState([]);

  useEffect(() => {
    setCurrentReplies(replies);
  }, [replies]);

  const handleNewReply = (data) => {
    setCurrentReplies((current) => [...current, data]);
    handleReplyButton();
  };

  const [isReplyShown, setIsReplyShown] = useState(false);
  const [isWidth, setIsWidth] = useState(false);
  const [isReplyButton, setIsReplyButton] = useState(true);

  const replyRef = useRef(null);

  const handleWidth = () => {
    setIsWidth((current) => !current);
  };
  const handleReplyShown = () => {
    setIsReplyShown((current) => !current);
  };

  const handleReplyButton = () => {
    setIsReplyButton((current) => !current);
    setTimeout(() => {
      handleReplyShown();
      handleWidth();
    }, 1);
  };

  // Handle Delete Reply
  const handleDelete = (reply_id) => {
    const deleteReplyRequest = async () => {
      try {
        const { data } = await axios({
          method: "PATCH",
          url: `${serverURL}/forums/${postId}`,
          data: {
            method: "delete_reply",
            reply_id: reply_id,
          },
        });
      } catch (err) {}
    };
    deleteReplyRequest(reply_id);
    const filteredCurrentReplies = currentReplies.filter((r) => {
      return r.reply_id !== reply_id;
    });
    setCurrentReplies(filteredCurrentReplies);
  };

  return (
    <>
      {/* render replies if comment has replies */}
      {currentReplies.map((r) => (
        <CommentReply
          username={username}
          loggedIn={loggedIn}
          replyId={r.reply_id}
          replyUsername={r.username}
          replyText={r.reply}
          replyTo={r.reply_to}
          postId={postId}
          serverURL={serverURL}
          onDelete={handleDelete}
        />
      ))}
      {/* render reply form if comment has replies  */}
      {replies && (
        <div className="reply-form-container">
          {!isReplyButton ? (
            <>
              <NewReplyForm
                username={username}
                loggedIn={loggedIn}
                serverURL={serverURL}
                isReplyShown={isReplyShown}
                isWidth={isWidth}
                postId={postId}
                messageId={messageId}
                onNewReply={handleNewReply}
                replyRef={replyRef}
              />
              <div
                className="close-reply-field"
                onClick={() => {
                  handleReplyButton();
                }}
              ></div>
            </>
          ) : (
            // Reply Button
            <button
              className="white-button"
              onClick={() => {
                handleReplyButton();
                setTimeout(() => {
                  replyRef.current.focus();
                }, 150);
              }}
            >
              Reply
            </button>
          )}
        </div>
      )}
    </>
  );
};
