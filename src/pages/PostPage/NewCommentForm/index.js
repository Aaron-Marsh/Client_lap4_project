import React, {useState} from 'react'
import axios from 'axios'
export const NewCommentForm = ({postId,onComment,username,loggedIn}) => {
    const [ message, setMessage ] = useState("");
    const handleMessageInput = e => setMessage(e.target.value);

    const handleFormEvent = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        const serverUrl = 'https://read-herring.herokuapp.com'
        console.log("username: ",username)
        console.log("username: ",username)
        console.log("username: ",username)
        try{
            const res = await axios({
                method: 'patch',
                url: `${serverUrl}/forums/${postId}`,
                data:{
                    "method":"thread_message",
                    "username":username,
                    "message":message,
                }
          })
          console.log(res);
          setMessage("");
          onComment();
        } catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <p>New Comment:</p>

    <form onSubmit={handleFormEvent} >
      <label htmlFor="message">Message:</label>
      <input 
        type="text" 
        id="message" 
        name="message" 
        placeholder="Type here..."
        value={message}
        onChange={handleMessageInput} />
      <input type="submit" disabled={!loggedIn}/>
    </form>
    </>
  )
}
