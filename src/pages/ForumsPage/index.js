import React from 'react';
import { ForumPosts } from '../../components/index';
import { SearchBar } from '../../components/index';

export const ForumsPage = () => {

	return (
		<div class="container">
			<h2>Forums page</h2>
			<SearchBar />
			<ForumPosts/>
		</div>
	);
};
