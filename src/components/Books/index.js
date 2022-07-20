import React from 'react';

export const Books = ({ books, setModalData, setOpen, children }) => {
	return (
		<div className='books-container'>
			<div className='book-grid'>
				{books &&
					books.map((book) => (
						<div key={book.ISBN} role='img' className='image-container'>
							<div class='book-container2'>
								<div
									class='book10'
									onClick={() => {
										setOpen((prev) => !prev);
										setModalData(book);
									}}>
									{
										<img
											className='book-picture'
											alt={book.title}
											src={book.images.thumbnail}
										/>
									}
								</div>
							</div>
						</div>
					))}
			</div>
			{children}
		</div>
	);
};
