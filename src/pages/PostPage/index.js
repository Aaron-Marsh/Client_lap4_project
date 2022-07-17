import React from "react";
import { useParams } from "react-router-dom";
import { ForumPostBody, LoginFooter } from '../../components/index'

export const PostPage = () => {
    
    let {postId} = useParams();

    return (
        <>
            <div className="container">
                <h2>PostPage</h2>
                <pre>Post ID: {postId}</pre>
                <ForumPostBody />
            </div>
            <LoginFooter />
        </>
    );
};
