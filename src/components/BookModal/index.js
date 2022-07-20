import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const BookModal = ({
	modalData,
	open,
	addToHasRead,
	addToWantsToRead,
	book,
}) => {
	const [show, setShow] = useState(false);

	const isMounted = useRef(false);

	const loggedIn = useSelector((state) => state.loggedIn);

	useEffect(() => {
		if (isMounted.current) {
			setShow(true);
		} else {
			isMounted.current = true;
		}
	}, [open]);

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

	return (
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
								Oh no! This book hasn't been rated yet! Be the first person to
								give this book some love (or hate. We're not gonna judge)
							</p>
						)}{' '}
						{modalData && modalData.num_rating > 0 && modalData.rating}{' '}
						{modalData && modalData.num_rating > 0 && <p>/</p>}
						{modalData && modalData.num_rating > 0 && modalData.num_rating}
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<OverlayTrigger trigger='click' placement='top' overlay={popover}>
					<button variant='success'>Rate🌟</button>
				</OverlayTrigger>

				<button
					variant='primary'
					onClick={() => addToHasRead(book)}
					disabled={!loggedIn}>
					Add to Read Bookshelf
				</button>
				<button variant='warning' onClick={addToWantsToRead}>
					Add to Reading List
				</button>
			</Modal.Footer>
		</Modal>
	);
};
