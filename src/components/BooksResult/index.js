
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


import "./style.css";
import { SearchBar, BookModal, Books } from "../";

export const BooksResult = () => {

	const [books, setBooks] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [loading, setLoading] = useState(false);
	const username = useSelector((state) => state.user.user);

	// Modal
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	// 	Add book to has read: (PATCH)
	// "method": "add_to_read",
	//  	"ISBN": "12345",
	//  	"title":"title",
	//  	"author":"author"

	const addToHasRead = async (isbn) => {
		try {
			const sendData = {
				method: 'add_to_read',
				ISBN: isbn,
				title: 'title',
				author: 'author',
			};
			const options = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.patch(
				`https://read-herring.herokuapp.com/users/${username}`,
				JSON.stringify(sendData),
				options
			);

			console.log(data);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	//  To add books to wants_to_read:
	//  Patch to users/username
	//  {
	//    "method": "add_to_wants_to_read",
	//    "ISBN": "123",
	//    "title":"book title",
	//    "author": "book's author"
	//  }

	const addToWantsToRead = () => {};

	// useEffect, search Google api through server
	const fetchBooks = async (searchTerm) => {
		setLoading(true);
		try {
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
		} catch (err) {
			throw new Error(err.message);
		}
	};

	useEffect(() => {
		console.log(books);
		console.log(books.length);
	}, [books]);

	return (
		<div className='books-wrapper'>
			<div className='search-books-container'>
				<h2>Looking for a book to add to your bookshelf?</h2>
				<p>Use the search bar below</p>

				<SearchBar getResults={fetchBooks} />
			</div>

			{hasSearched && (
				<>
					<Books
						books={books}
						loading={loading}
						setModalData={setModalData}
						setOpen={setOpen}
					/>

					<BookModal
						modalData={modalData}
						open={open}
						addToHasRead={addToHasRead}
						addToWantsToRead={addToWantsToRead}
					/>
				</>
			)}
		</div>
	);

};
