import React from 'react'
import { PostComment } from '../PostComment'
export const PostComments = ({postMessages}) => {
  return (
    <div className="container post-comments">
    <p>Hello from PostComments</p>
    {postMessages && postMessages.map((m)=>(
        <PostComment 
            message_id={m.message_id}
            username={m.username}
            message={m.message}
        />
    ))}
    </div>

  )
}
