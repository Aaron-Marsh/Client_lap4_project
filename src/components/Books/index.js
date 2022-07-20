import React from 'react';

export const Books = ({ books, loading, setModalData, setOpen }) => {
	if (loading) {
		return <h2>Loading... </h2>;
	}

	return (
		<div className='books-container'>
			<div className='book-grid'>
				{books.map((book) => (
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
		</div>
	);
};
