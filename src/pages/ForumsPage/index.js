import React from 'react';
import { SearchBar, LoginFooter, ForumPosts } from "../../components/index";

export const ForumsPage = () => {


	return (
		<>
		<div className="container">
			<h2>Forums page</h2>
			<SearchBar />
			<ForumPosts/>
		</div>
			<LoginFooter />
		</>
	);
};
