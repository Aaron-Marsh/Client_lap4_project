import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

import { SearchBar } from '../SearchBar';
// import { Book } from '../Book';
// import { getResult } from '../../actions';

export const BooksResult = () => {
	const [books, setBooks] = useState({});

	// useEffect, search api
	const fetchBooks = async (searchTerm, apikey) => {
		try {
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle:keyes&key=${apikey}`
			);
			console.log('data', data.items);
			setBooks(data.items);
			console.log('setBooks', books);
		} catch (err) {
			throw new Error(err.message);
		}
		console.log('books', books);
	};

	return (
		<>
			<h2>Take a look at all of these amazing books!</h2>
			<p>WOW!</p>
			<SearchBar getBooks={fetchBooks} />

			{/* Map over all the books in result */}
			{/* <Book /> */}
		</>
	);
};
