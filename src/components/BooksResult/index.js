import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { SearchBar, BookModal, PaginationComponent } from '../';
import { Books } from '../Books';

// import { getResult } from '../../actions';

export const BooksResult = () => {
	const [books, setBooks] = useState([]);
	const [herringCarousel, setHerringCarousel] = useState([]);
	const [fishCarousel, setFishCarousel] = useState([]);
	const [cookingCarousel, setCookingCarousel] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [loading, setLoading] = useState(false);

	// Modal
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(12);

	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

	// fetch on load
	const fetchHerringBooksOnLoad = async () => {
		try {
			const data = {
				query_type: 'intitle',
				query: 'herring',
				num_results: 10,
			};
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			await axios.post(
				`https://read-herring.herokuapp.com/books/api/`,
				JSON.stringify(data),
				options
			);

			setHerringCarousel(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};
	const fetchFishBooksOnLoad = async () => {
		try {
			const data = {
				query_type: 'intitle',
				query: 'fish',
				num_results: 10,
			};
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			await axios.post(
				`https://read-herring.herokuapp.com/books/api/`,
				JSON.stringify(data),
				options
			);

			setFishCarousel(data.items);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	const fetchCookingBooksOnLoad = async () => {
		try {
			const data = {
				query_type: 'intitle',
				query: 'cooking',
				num_results: 10,
			};
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			await axios.post(
				`https://read-herring.herokuapp.com/books/api/`,
				JSON.stringify(data),
				options
			);

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

	// useEffect, search Google api through server
	const fetchBooks = async (searchTerm) => {
		setLoading(true);
		try {
			console.log(loading);
			const sendData = {
				query_type: 'intitle',
				query: searchTerm,
				num_results: '40',
			};
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			let { data } = await axios.post(
				`https://read-herring.herokuapp.com/books/api/`,
				JSON.stringify(sendData),
				options
			);
			setBooks(data);
			setHasSearched(true);
			setLoading(false);
			console.log(loading);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	return (
		<div className='books-wrapper'>
			<div className='search-books-container'>
				<h2>Looking for a book to add to your bookshelf?</h2>
				<p>Use the search bar below</p>

				<SearchBar getResults={fetchBooks} />
			</div>

			{/* <div className='books-result-wrapper'> */}
			{/* THIS CODE WILL BE USED WHEN EVERYTHING WORKS!!! */}
			{/* {herringCarousel.map((book) => (

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

				))} */}

			{/* </div> */}

			{hasSearched && (
				<>
					<Books
						books={currentBooks}
						loading={loading}
						setModalData={setModalData}
						setOpen={setOpen}
					/>

					<BookModal modalData={modalData} open={open} />

					<PaginationComponent
						booksPerPage={booksPerPage}
						totalBooks={books.length}
					/>
				</>
			)}
		</div>
	);
};
