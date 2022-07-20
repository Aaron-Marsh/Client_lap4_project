import React, { useState, useEffect } from 'react';
import { BooksResult, LoginFooter } from '../../components/';

export const BooksPage = () => {
	const [showLoginFooter, setShowLoginFooter] = useState(false);

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
