import React, {useState} from 'react'
import axios from 'axios'

export const NewPostForm = ({username,loggedIn}) => {
    const [ title, setTitle ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleTitleInput = e => setTitle(e.target.value);
    const handleMessageInput = e => setMessage(e.target.value);

    const handleFormEvent = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        const serverUrl = 'https://read-herring.herokuapp.com'
        try{
            const res = await axios({
                method: 'post',
                url: `${serverUrl}/forums/`,
                data:{
                    "title":title,
                    "username":username,
                    "first_message":message,}
          })
          console.log(res)
        } catch(err){
            console.log(err)
        }
    }
  return (
    <>

    <p>NewPostForm</p>

    <form onSubmit={handleFormEvent} >
      <label htmlFor="Title">Post Title</label>
      <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder="Type here..."
        value={title}
        onChange={handleTitleInput}/>
      <label htmlFor="message">Post message</label>
      <input 
        type="text" 
        id="message" 
        name="message" 
        placeholder="Type here..."
        value={message}
        onChange={handleMessageInput}/>
      <input type="submit" disabled={!loggedIn}/>
    </form>
    </>

  )
}
