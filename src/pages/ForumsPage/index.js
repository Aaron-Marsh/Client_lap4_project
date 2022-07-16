import React from 'react';
import { SearchBar, LoginFooter, ForumPosts } from "../../components/index";

export const ForumsPage = () => {

	return (
		<div class="container">
			<h2>Forums page</h2>
			<SearchBar />
			<ForumPosts/>
			<LoginFooter />
		</div>
	);
};
