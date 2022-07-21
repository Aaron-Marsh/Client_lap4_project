import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export const NewReplyForm = ({
    username,
    loggedIn,
    serverURL,
    isReplyShown,
    isWidth,
    postId,
    messageId,
    onNewReply,
    replyRef
}) => {
    const [replyText, setReplyText] = useState("");
    const handleReplyInput = (e) => setReplyText(e.target.value);

    // Send Reply to Backend
    const handleNewReplyEvent = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const { data } = await axios({
                method: "PATCH",
                url: `${serverURL}/forums/${postId}`,
                data: {
                    method: "reply_message",
                    username: username,
                    reply: replyText,
                    message_id: messageId,
                    reply_to: "",
                },
            });
            onNewReply(data);
            setReplyText("");
        } catch (err) {}
    };

    return (
        <div className="comment-reply-container">
            <form
                className={
                    isReplyShown
                        ? isWidth
                            ? "message-reply-input width"
                            : "message-reply-input "
                        : "message-reply-input"
                }
                onSubmit={handleNewReplyEvent}
            >
                <label htmlFor="reply"></label>
                <input
                    ref={replyRef}
                    type="text"
                    id="reply"
                    name="reply"
                    className="orange-input"
                    placeholder="Add your reply..."
                    value={replyText}
                    onChange={handleReplyInput}
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
