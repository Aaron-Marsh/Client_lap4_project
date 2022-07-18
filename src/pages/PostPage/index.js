import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoginFooter } from '../../components/index'
import { PostHeader } from './PostHeader'
import { PostComments } from './PostComments'
import axios from "axios";
import './style.css'

export const PostPage = () => {
    
    let { postId } = useParams();
    const [postMessages,setPostMessages] = useState([""])
    const [post, setPost] = useState("");
    
    useEffect(() => {
        console.log("hello from inside useEffect");
        const loadData = async () => {
            try {
                console.log("Entering Try Block in PostPage");
                console.log("postId: ", postId);
                let myURL = "https://read-herring.herokuapp.com";
                const { data } = await axios.get(`${myURL}/forums`);
                // let postData = await data.filter((p) => data.indexOf(p) === postId);
                // data.length > 0
                //     ? setPost(await data[postId])
                //     : setPost({ title: "No Post Found" });
                console.log("post data: ", await data[postId])
                // console.log("post message data: ", await data[postId].messages)
                setPost(await data[postId])
            } catch (err) {
                console.log(err);
            }
        };
        loadData();
        return () => {};
    }, []);

    useEffect(()=>{
        if (post) {
            console.log("Post Messages",post.messages);
            setPostMessages(post.messages)
            post.messages.map((m)=>{
                console.log("message_id:",m.message_id)
            })
        }
        return () => {};
    },[post])

    return (
        <>
            <div className="container">
                <h2>PostPage</h2>
                <pre>Post ID: {postId}</pre>
                <PostHeader 
                    title={post.title} 
                    username={post.username}
                    first_message={post.first_message}
                />
                {postMessages
                ? <PostComments postMessages={postMessages} test="test"/> 
                : <p>no comments yet</p>}
            </div>
            <LoginFooter />
        </>
    );
};
