import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

import { SearchBar } from '../SearchBar';
// import { Book } from '../Book';
// import { getResult } from '../../actions';

export const BooksResult = () => {
	const [books, setBooks] = useState([]);

	// useEffect, search api
	const fetchBooks = async (searchTerm, apikey) => {
		try {
			console.log(searchTerm);
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&key=${apikey}`
			);
			console.log('data', data);

			setBooks(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	useEffect(() => {
		console.log('setBooks', books);
	}, [books]);

	// console.log(books);

	return (
		<>
			<h2>Take a look at all of these amazing books!</h2>
			<p>WOW!</p>
			<SearchBar getBooks={fetchBooks} />

			{books.map((book) => (
				<div key={book.id}>
					<h3>{book.volumeInfo.title}</h3>
					<img
						alt={book.volumeInfo.title}
						src={book.volumeInfo.imageLinks?.thumbnail}
					/>
				</div>
			))}
			{/* Map over all the books in result */}
			{/* <Book /> */}
		</>
	);
};
