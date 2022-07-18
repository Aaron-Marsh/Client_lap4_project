import React from "react";

export const PostComment = ({ post_username, message }) => {
    return (
        <>
            <p>{post_username}</p>
            <p>{message}</p>
        </>
    );
};
