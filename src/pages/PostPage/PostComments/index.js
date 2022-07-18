import React from "react";
import { PostComment } from "../PostComment";
export const PostComments = ({ postMessages }) => {
    return (
        <div className="container post-comments">
            {postMessages &&
                postMessages.map((m) => (
                    <PostComment
                        post_username={m.username}
                        message={m.message}
                    />
                ))}
        </div>
    );
};
