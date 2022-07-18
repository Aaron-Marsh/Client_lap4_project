import React from 'react';
import './styles.css';

export const Profile = () => {
	return (
		<main className='main-profile'>
			<div className='intro-wrapper'>
				<h2>Welcome to username's profile!</h2>
				<p className='about-me'>
					This is a really interesting about me section 🐠
				</p>
			</div>

			<div className='shelf-user-wrapper'>
				<div className='bookshelf'>
					<div className='shelf'>
						This is where we will put one of the shelves
					</div>

					<div className='shelf'>
						This is where we will put one of the shelves
					</div>

					<div className='shelf'>
						This is where we will put one of the shelves
					</div>
				</div>

				<div className='following-wrapper'>
					<h3>Followers</h3>

					<div className='following-users'>
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
					</div>
				</div>
			</div>
		</main>
	);
};
