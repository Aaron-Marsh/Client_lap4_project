import React, { useState, useEffect } from 'react';
import {ForumPost} from '../index'
import { Link } from 'react-router-dom';

export const ForumPosts = () => {

	const [posts,setPosts] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);

	// insert code here to get post info from the db to render the post
	// Info Including:
	// - Post Title
	// - Post Content
	// - Post Reacts
	// - Post Comment Count
	// const fetchPosts = async () => {
	// 	try {

	// 		const { data } = await axios.get('');
	// 		console.log("DATA:",data);
	// 		setPosts(data);
	// 	} catch (err) {
	// 		throw new Error(err.message);
	// 	}
	// }

	// useEffect(()=> {
	// 	fetchPosts();
	// },[])

	// <ForumPost title=(post.title)/>
	// {JSON.stringify(post)}

// Each forum post will be wrapped in a link that will take you to the posts page
// Here you will be able to add to react and comment on the post
	return (
		<div className="post-wrapper">
			{
				posts.map((p)=>(
					
				<Link to="/forums"><ForumPost/></Link>

				))
			}
		</div>
	);
};
