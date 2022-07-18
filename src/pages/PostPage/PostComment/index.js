import React from 'react'

export const PostComment = ({message_id,username,message}) => {
  return (
      <>
      <p>{message_id} {username}</p>
      <p>{message}</p>
    </>
  )
}
