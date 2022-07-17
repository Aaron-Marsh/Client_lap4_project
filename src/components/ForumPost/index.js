import React from 'react';
import './style.css';

export const ForumPost = ({title,username,first_message}) => {
	return (
		<div className="container post">
			<h3>{title}</h3>
			<h4>Author: {username}</h4>
			<p>{first_message}</p>
		</div>
	);
};
