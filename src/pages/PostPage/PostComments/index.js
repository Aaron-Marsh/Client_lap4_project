import React from "react";
import { PostComment } from "../PostComment";
export const PostComments = ({ postMessages }) => {
    return (
        <div className="container post-comments">
            {postMessages &&
                postMessages.map((m) => (
                    <PostComment
                        username={m.username}
                        message={m.message}
                    />
                ))}
        </div>
    );
};
