import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  // Edit Messages Section
  const [isEditShown, setIsEditShown] = useState(false);

  const [editMessage, setEditMessage] = useState('');
  const [isEditWidth, setIsEditWidth] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');


  const handleEditButton = () => {
    setEditMessage(message);
    handleEditShown();
    handleEditWidth();
  };

  const handleEditShown = () => {
    setIsEditShown((current) => {
      console.log('editShown: ', !current);
      return !current;
    });
  };

  const handleEditMessage = (e) => setEditMessage(e.target.value);

  const handleEditWidth = () => {
    setIsEditWidth((current) => !current);
  };


  useEffect(() => {
    setCurrentMessage(message);
  }, []);

  const [reply, setReply] = useState('');

  const [isReplyShown, setIsReplyShown] = useState(false);
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
  const handleReplyShown = () => {
    setIsReplyShown((current) => !current);
  };

  const handleReplyButton = () => {
    setIsReplyButton((current) => !current);
  };

  useEffect(() => {
    setRepliesArray(replies);
  }, []);

  // Send Reply to Backend
  const handleReplyEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `https://read-herring.herokuapp.com/forums/${postId}`,
        data: {
          method: 'reply_message',
          username: username,
          reply: reply,
          message_id: messageId,
          reply_to: '',
        },
      });
      setRepliesArray((current) => [...current, data]);

      setReply('');
    } catch (err) {}
  };

  // Editing Comments
  const handleEditEvent = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `https://read-herring.herokuapp.com/forums/${postId}`,
        data: {
          method: 'thread_message',
          username: username,

          message: editMessage,
          message_id: messageId,

        },
      });
      // setRepliesArray((current) => [...current, data]);
    } catch (err) {
      console.log(err);
    }
    handleEditButton();
    setCurrentMessage(editMessage);
  };

  const handleDeleteReplyEvent = async () => {
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `https://read-herring.herokuapp.com/forums/${postId}`,
        data: {
          method: 'delete_message',

          message_id: messageId,
        },
      });

      setDeleted(true);
    } catch (err) {}
  };

  return (
    <>
      {' '}
      {/* ******** Boolean Toggle for Hiding Deleted Comments ******** */}
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
            ''
          )}

          <div className="message-content">
            <div
              className="message-line"
              onClick={() => {
                clicked
                  ? document
                      .getElementById(messageId)
                      .classList.remove('hide-reply')
                  : document
                      .getElementById(messageId)
                      .classList.add('hide-reply');
                clicked = !clicked;
              }}
            ></div>
            {/* MESSAGE USERNAME */}
            <div className="message-header">
              <Link
                className="message-username"
                to={`/profile/${message_username}`}
              >
                {message_username}
              </Link>

              {/* EDIT BUTTON TO SHOW FORM */}
              <button onClick={handleEditButton}>edit</button>
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
                    onChange={handleEditMessage}
                    value={editMessage}
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
              // PASS IN MESSAGE
              <div className="message-message">{currentMessage}</div>

            )}
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
              : ''}
            <div className="reply-form-container">
              {!isReplyButton ? (
                ''
              ) : (
                <button
                  className="white-button"
                  onClick={() => {
                    handleReplyShown();
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
                    isReplyShown
                      ? isWidth
                        ? 'message-reply-input width'
                        : 'message-reply-input '
                      : 'message-reply-input'
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
                    value="Send"
                    disabled={!loggedIn}
                  />
                  <div
                    className="close-reply-field"
                    onClick={() => {
                      handleReplyShown();
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
