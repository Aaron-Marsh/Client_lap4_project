import React from 'react';

export const LoadScreen = () => {
	return (
		<>
			<h2>
				We're working hard on trying to find the book you're looking for...
			</h2>
			<div class='bookshelf_wrapper'>
				<ul class='books_list'>
					<li class='book_item first'></li>
					<li class='book_item second'></li>
					<li class='book_item third'></li>
					<li class='book_item fourth'></li>
					<li class='book_item fifth'></li>
					<li class='book_item sixth'></li>
				</ul>
				<div class='shelf'></div>
			</div>
		</>
	);
};
