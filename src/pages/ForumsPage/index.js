import React from 'react';
import { SearchBar, LoginFooter } from "../../components/index";
import { ForumPosts} from './ForumPosts'

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
