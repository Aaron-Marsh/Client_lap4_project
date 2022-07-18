import React from 'react';
import { useSelector } from 'react-redux'
import { SearchBar, LoginFooter } from "../../components/index";
import { ForumPosts } from './ForumPosts'
import { NewPostForm } from './NewPostForm'

export const ForumsPage = () => {
    const username = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.loggedIn);

	return (
		<>
		<div className="container">
			<h2>Forums page</h2>
			<SearchBar />
			<NewPostForm 
				username={username}
				loggedIn={loggedIn}
				/>
			<ForumPosts/>
		</div>
			<LoginFooter />
		</>
	);
};
