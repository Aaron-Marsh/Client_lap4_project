import React from 'react';

export const ForumPost = ({title,username,first_message}) => {
	return (
		<div className="container thread-body">
			<h3>{title}</h3>
			<h4>Author: {username}</h4>
			<p>{first_message}</p>
		</div>
	);
};
