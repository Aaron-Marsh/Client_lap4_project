import React from "react";

export const PostHeader = ({ title, post_username, first_message }) => {
    return (
        <div className="container post-header">
            <h3>{title}</h3>
            <h4>Author: {post_username}</h4>
            <p>{first_message}</p>
        </div>
    );
};
