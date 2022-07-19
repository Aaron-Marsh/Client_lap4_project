import React, { useState, useEffect } from "react";
import { PostComment } from "../PostComment";
export const PostComments = ({
  postMessages,
  loggedIn,
  postId,
  serverURL,
  username,
}) => {
  const [allReplies, setAllReplies] = useState([]);

  useEffect(() => {
    console.log("im changing");
    setAllReplies(postMessages);
  }, [postMessages]);

  return (
    <div className="container post-comments">
      {allReplies.length > 0
        ? allReplies.map((m) => (
            <PostComment
              message_username={m.username}
              message={m.message}
              replies={m.replies}
              loggedIn={loggedIn}
              postId={postId}
              serverURL={serverURL}
              messageId={m.message_id}
              username={username}
            />
          ))
        : ""}
    </div>
  );
};
