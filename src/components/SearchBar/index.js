import React, { useState } from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

export const SearchBar = ({ getResults }) => {
	// checks if user is logged in for search results
	// const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const [search, setSearch] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		getResults(search);
		console.log(search);
	};

	const updateInput = (e) => {
		const input = e.target.value;
		setSearch(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='search'>Search</label>
			<input id='search' type='text' onChange={updateInput} value={search} />
			<input type='submit' value='Search' />
		</form>
	);
};
