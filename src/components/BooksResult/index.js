import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { SearchBar } from '../SearchBar';
import { MultiCarousel } from '../Carousel';
// import { getResult } from '../../actions';

export const BooksResult = () => {
	const [books, setBooks] = useState([]);
	const [herringCarousel, setHerringCarousel] = useState([]);
	const [fishCarousel, setFishCarousel] = useState([]);
	const [cookingCarousel, setCookingCarousel] = useState([]);

	// fetch on load
	const fetchHerringBooksOnLoad = async () => {
		try {
			console.log();
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=herring&key=AIzaSyAs423tpX5M6cZ3kHj87t7V0cnRwcAGpek`
			);
			console.log('herring', data);

			setHerringCarousel(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};
	const fetchFishBooksOnLoad = async () => {
		try {
			console.log();
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=fish&key=AIzaSyAs423tpX5M6cZ3kHj87t7V0cnRwcAGpek`
			);
			console.log('fish', data);

			setFishCarousel(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	const fetchCookingBooksOnLoad = async () => {
		try {
			console.log();
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=cook+fish&key=AIzaSyAs423tpX5M6cZ3kHj87t7V0cnRwcAGpek`
			);
			console.log('cooking', data);

			setCookingCarousel(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	useEffect(() => {
		fetchHerringBooksOnLoad();
		fetchFishBooksOnLoad();
		fetchCookingBooksOnLoad();
	}, []);

	// post search to server
	useEffect(() => {
		fetchBooksServer();
	}, []);

	const fetchBooksServer = async (searchTerm) => {};

	// req.body = query_type: intitle, query: searchTerm, num_results: whatevs

	// useEffect, search Google api through server
	const fetchBooks = async (searchTerm) => {
		try {
			console.log(searchTerm);
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.post(
				`https://read-herring.herokuapp.com/books/api`,
				options
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
			<SearchBar getResults={fetchBooks} />
			<div className='books-result-wrapper'>
				<MultiCarousel>
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
				</MultiCarousel>

				{/* THIS CODE WILL BE USED WHEN EVERYTHING WORKS!!! */}
				{/* Still buggy though... something about ariaLabel in console.. */}

				{/* <MultiCarousel>
					{herringCarousel.map((book) => (
						<div
							role='img'
							aria-label='Books with Herring in the title'
							className='image-container'
							key={book.id}>

							<img
								alt={book.volumeInfo.title}
								src={book.volumeInfo.imageLinks?.thumbnail}
							/>
						</div>
					))}
					;
				</MultiCarousel>
				<MultiCarousel>
					{fishCarousel.map((book) => (
						<div
							role='img'
							aria-label='Books with Fish in the title'
							className='image-container'
							key={book.id}>
							<img
								alt={book.volumeInfo.title}
								src={book.volumeInfo.imageLinks?.thumbnail}
							/>
						</div>
					))}
					;
				</MultiCarousel>
				<MultiCarousel>
					{cookingCarousel.map((book) => (
						<div
							role='img'
							aria-label='Books with Cooking Fish in the title'
							className='image-container'
							key={book.id}>
							<img
								alt={book.volumeInfo.title}
								src={book.volumeInfo.imageLinks?.thumbnail}
							/>
						</div>
					))}
					;
				</MultiCarousel> */}
			</div>
		</>
	);
};
