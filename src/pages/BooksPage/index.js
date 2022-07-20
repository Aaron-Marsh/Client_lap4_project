import React, { useState, useEffect } from 'react';
import { BooksResult, LoginFooter } from '../../components/';

export const BooksPage = () => {
	const [showLoginFooter, setShowLoginFooter] = useState(false);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage, setBooksPerPage] = useState(12);

	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

	useEffect(() => {
		let myScrollFunc = function () {
			let y = window.scrollY;
			if (y >= 100) {
				setShowLoginFooter(true);
			} else {
				setShowLoginFooter(false);
			}
		};

		window.addEventListener('scroll', myScrollFunc);

		return () => {
			window.removeEventListener('scroll', myScrollFunc);
		};
	}, []);

	return (
		<>
			<h2>Books page</h2>
			<BooksResult />
			{showLoginFooter ? <LoginFooter /> : ''}
		</>
	);
};
