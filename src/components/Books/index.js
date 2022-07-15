import React, { useEffect } from 'react';
import Book from '../index'

export const Books = () => {

	const [books,setBooks] = useState([1,1,1,1,1,1,1,1])

	const updateBooks = (data) => {books = data}

	// useEffect hook for default books on load?
	// useEffect(function () {
	// 	axios
	// 		.get("some url")
	// 		.then((res) => updateBooks(res.data))
	// 		.then((err) = console.log(err))
	// },[]);

	return (
		<>
			<h2>Take a look at all of these amazing books!</h2>
			<p>WOW!</p>
			{books.map((book) => {<Book/>})}
		</>
	);
};
