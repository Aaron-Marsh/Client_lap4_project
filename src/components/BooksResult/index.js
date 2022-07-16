import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { SearchBar } from '../SearchBar';
import { Carousel } from '../Carousel';

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
			<div className='books-result-wrapper'>
				<Carousel show={4} infiniteLoop={true}>
					<div className='image-container'>
						<img alt='' src='https://www.placecage.com/c/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.placecage.com/g/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.placecage.com/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.placecage.com/gif/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.fillmurray.com/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.fillmurray.com/g/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.stevensegallery.com/200/300' />
					</div>
					<div className='image-container'>
						<img alt='' src='https://www.stevensegallery.com/g/200/300' />
					</div>

					{/* THIS CODE WILL BE USED WHEN EVERYTHING WORKS!!! */}
					{/* {books.map((book) => (
						<div className='image-container' key={book.id}>
							<img
								alt={book.volumeInfo.title}
								src={book.volumeInfo.imageLinks?.thumbnail}
							/>
						</div>
					))}
					; */}
				</Carousel>
			</div>
		</>
	);
};
