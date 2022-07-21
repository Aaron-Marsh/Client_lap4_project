import React, { useState, useEffect } from "react";
import { PostComment } from "../PostComment";
import axios from "axios";

// POST COMMENTS
// Renders post comments
// This component stores current comments in local state
// handles delete comment function

export const PostComments = ({
    username,
    loggedIn,
    post,
    postId,
    serverURL,
}) => {
    // comments array
    const [commentsArray, setCommentsArray] = useState([]);

    // updates comments array at after post loaded
    useEffect(() => {
        if (post.messages) {
            setCommentsArray(post.messages);
        }
        return () => {};
    }, [post]);

    // Handle Deleted Comments
    const handleDelete = (messageId) => {
        const deleteCommentRequest = async () => {
            try {
                const { data } = await axios({
                    method: "PATCH",
                    url: `${serverURL}/forums/${postId}`,
                    data: {
                        method: "delete_message",
                        message_id: messageId,
                    },
                });
            } catch (err) {}
        };
        deleteCommentRequest();

        const filteredCommentsArray = commentsArray.filter((c) => {
            return c.message_id !== messageId;
        });
        setCommentsArray(filteredCommentsArray);
    };

    return (
        <div className="container post-comments">
            {commentsArray.map((c) => (
                <PostComment
                    username={username}
                    loggedIn={loggedIn}
                    messageId={c.message_id}
                    messageUsername={c.username}
                    message={c.message}
                    replies={c.replies}
                    postId={postId}
                    serverURL={serverURL}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};
