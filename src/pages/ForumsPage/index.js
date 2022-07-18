import React from 'react';
import { SearchBar, LoginFooter } from "../../components/index";
import { ForumPosts } from './ForumPosts'
import { NewPostForm } from './NewPostForm'

export const ForumsPage = () => {


	return (
		<>
		<div className="container">
			<h2>Forums page</h2>
			<SearchBar />
			<NewPostForm />
			<ForumPosts/>
		</div>
			<LoginFooter />
		</>
	);
};
