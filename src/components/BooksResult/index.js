import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import './style.css';
import { SearchBar } from '../SearchBar';
import { Button } from 'react-bootstrap';

// import { getResult } from '../../actions';

export const BooksResult = () => {
	const [books, setBooks] = useState([]);
	const [herringCarousel, setHerringCarousel] = useState([]);
	const [fishCarousel, setFishCarousel] = useState([]);
	const [cookingCarousel, setCookingCarousel] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);

	// Modal
	const [show, setShow] = useState(false);
	const [modalData, setModalData] = useState(null);

	const handleClose = () => setShow(false);

	const popover = (
		<Popover id='popover-basic'>
			<Popover.Body>
				<img
					className='popover-fish'
					alt='Rate the book in fish'
					src={require('../../imgs/fish_disabled.png')}
				/>
				<img
					className='popover-fish'
					alt='Rate the book in fish'
					src={require('../../imgs/fish_disabled.png')}
				/>
				<img
					className='popover-fish'
					alt='Rate the book in fish'
					src={require('../../imgs/fish_disabled.png')}
				/>
				<img
					className='popover-fish'
					alt='Rate the book in fish'
					src={require('../../imgs/fish_disabled.png')}
				/>
				<img
					className='popover-fish'
					alt='Rate the book in fish'
					src={require('../../imgs/fish_disabled.png')}
				/>
			</Popover.Body>
		</Popover>
	);

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
		try {
			const sendData = {
				query_type: 'intitle',
				query: searchTerm,
				num_results: '12',
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
		} catch (err) {
			throw new Error(err.message);
		}
	};

	return (
		<div className='books-wrapper'>
			<div className='books-container'>
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
				<div className='books-container'>
					<div className='book-grid'>
						{books.map((book) => (
							<div
								key={book.ISBN}
								role='img'
								className='image-container'
								onClick={() => {
									setShow(true);
									setModalData(book);
								}}>
								<div class="book-container2">
  									<div class="book10">
    								{<img alt="The Outstanding Developer by Sebastien Castiel" src={book.images.thumbnail}/>}
  			 						</div>
								</div>

							</div>
						))}
					</div>

					{/* Modal */}
					<Modal
						show={show}
						onHide={handleClose}
						size='lg'
						aria-labelledby='contained-modal-title-vcenter'
						centered>
						<Modal.Header closeButton>
							<Modal.Title>{modalData && modalData.title} &nbsp; </Modal.Title>
						</Modal.Header>

						<Modal.Body className='modal-wrapper'>
							<div className='modal-description'>
								{modalData && modalData.description}
							</div>
							<div className='modal-container'>
								<img
									alt={modalData && modalData.title}
									src={modalData && modalData.images.thumbnail}
									className='modal-img'
								/>
								<p>{modalData && modalData.author}</p>
								<p>
									Rating:{' '}
									{modalData && modalData.num_rating < 1 && (
										<p>
											Oh no! This book hasn't been rated yet! Be the first
											person to give this book some love (or hate. We're not
											gonna judge)
										</p>
									)}{' '}
									{modalData && modalData.num_rating > 0 && modalData.rating}{' '}
									{modalData && modalData.num_rating > 0 && <p>/</p>}
									{modalData &&
										modalData.num_rating > 0 &&
										modalData.num_rating}
								</p>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<OverlayTrigger trigger='click' placement='top' overlay={popover}>
								<Button variant='success'>Rate🌟</Button>
							</OverlayTrigger>

							<Button variant='primary' onClick={handleClose}>
								Add to Read Bookshelf
							</Button>
							<Button variant='warning' onClick={handleClose}>
								Add to Reading List
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			)}
		</div>
	);
};
