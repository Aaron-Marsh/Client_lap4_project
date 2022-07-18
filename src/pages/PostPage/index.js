import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoginFooter } from '../../components/index'
import { PostHeader } from './PostHeader'
import { PostComments } from './PostComments'
import { NewCommentForm } from './NewCommentForm'
import axios from "axios";
import './style.css'

export const PostPage = () => {
    
    const [postMessages,setPostMessages] = useState([])
    const [post, setPost] = useState("");
    let { postId } = useParams();

    const loadData = async () => {
        try {
            let myURL = "https://read-herring.herokuapp.com";
            const { data } = await axios.get(`${myURL}/forums/${postId}`);
            // const pertinentPost = await data.filter((p)=>{
            //     return p.id === postId
            // })
            setPost(await data)
        } catch (err) {
            console.log(err);
        }
    };
    // get post data by id in route
    useEffect(() => {
        console.log("hello from inside useEffect1");
        loadData();
        return () => {};
    }, []);

    useEffect(()=>{
        console.log("hello from inside useEffect2");
        if (post) {
            setPostMessages(post.messages)
            post.messages && post.messages.map((m)=>{
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
                <NewCommentForm 
                    postId={postId}
                    onComment={loadData}
                />
                {postMessages
                ? <PostComments 
                    postMessages={postMessages} 
                    test="test"/> 
                : <p>no comments yet</p>}
            </div>
            <LoginFooter />
        </>
    );
};
