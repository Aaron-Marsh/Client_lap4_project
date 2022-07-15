import React, { useState, useEffect } from 'react';
import { ForumPost } from '../../components/index';
import { SearchBar } from '../../components/index';

export const ForumsPage = () => {

	const [posts,setPosts] = useState([
		'some post',
		'some post',
		'some post']);

	// the bit what gets all the posts
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

	return (
		<div class="container">
			<h2>Forums page</h2>
			<SearchBar />
			<div class="post-wrapper">
			{posts.map((post)=>(
				<p>{post}</p>
				))}
			</div>
		</div>
	);
};
