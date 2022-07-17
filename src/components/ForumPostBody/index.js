import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ForumPostBody = () => {
    console.log("HELLO FROM ForumPostBody");

    let { postId } = useParams();
    const [post, setPost] = useState("");

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
			setPost(await data[postId])
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log("hello from inside useEffect");
        loadData();
        return () => {};
    }, []);

    return (
        <div className="container">
            <h3>{post.title}</h3>
            <h4>Author: {post.username}</h4>
            <p>{post.first_message}</p>
        </div>
    );
};
