import React, { useState,useEffect } from "react";
import { ForumPost } from "../ForumPost";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";

export const ForumPosts = () => {
    // const storeServerURL = useSelector((state) => state.serverReducer);

    const [posts, setPosts] = useState([]);
    // const [serverURL, setServerURL] = useState("");

    // insert code here to get post info from the db to render the post
    // Info Including:
    // - Post Title
    // - Post Content
    // - Post Reacts
    // - Post Comment Count

    // useEffect(() => {
    // 	console.log("firing useEffect1")
    //     setServerURL(storeServerURL);
    // }, []);


    // Hardcoded URL for now until we can get the env detection working!!!
    useEffect(() => {
        console.log("entering useEffect");
        const fetchPosts = async () => {
            try {
                console.log("Entering Try Block...");
                let myURL = "https://read-herring.herokuapp.com";
                const { data } = await axios.get(`${myURL}/forums`);
                data.map((d, idx) => {
                    d.key = idx;
                });
                console.log("DATA:", data);
                setPosts(await data);
            } catch (err) {
                throw new Error(err.message);
            }
        };
        fetchPosts();
    }, []);

    // Each forum post will be wrapped in a link that will take you to the posts page
    // Here you will be able to add to react and comment on the post
    return (
        <div className="post-wrapper">
            {posts.map((p) => (
                <Link
                    to={{
                        pathname: "/forums/" + p.key,
                    }}
                >
                    <ForumPost
                        key={p.key}
                        title={p.title}
                        username={p.username}
                        first_message={p.first_message}
                    />
                </Link>
            ))}
        </div>
    );
};
