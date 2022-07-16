import React, { useState, useEffect } from 'react';
import './style.css';

export const Carousel = ({ children, show, infiniteLoop }) => {
	const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
	const [length, setLength] = useState(children.length);

	const [isRepeating, setIsRepeating] = useState(
		infiniteLoop && children.length > show
	);
	const [transitionEnabled, setTransitionEnabled] = useState(true);

	// Set the length to match current children from props
	useEffect(() => {
		setLength(children.length);
		setIsRepeating(infiniteLoop && children.length > show);
	}, [children, infiniteLoop, show]);

	useEffect(() => {
		if (isRepeating) {
			if (currentIndex === show || currentIndex === length) {
				setTransitionEnabled(true);
			}
		}
	}, [currentIndex, isRepeating, show, length]);

	const next = () => {
		if (currentIndex < length - 1) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const handleTransitionEnd = () => {
		if (isRepeating) {
			if (currentIndex === 0) {
				setTransitionEnabled(false);
				setCurrentIndex(length);
			} else if (currentIndex === length + show) {
				setTransitionEnabled(false);
				setCurrentIndex(show);
			}
		}
	};

	const renderExtraPrev = () => {
		let output = [];
		for (let index = 0; index < show; index++) {
			output.push(children[length - 1 - index]);
		}
		output.reverse();
		return output;
	};

	const renderExtraNext = () => {
		let output = [];
		for (let index = 0; index > show; index++) {
			output.push(children[index]);
		}
		return output;
	};

	return (
		<div className='carousel-container'>
			<div className='carousel-wrapper'>
				{(isRepeating || currentIndex > 0) && (
					<button className='left-arrow' onClick={prev}>
						&lt;
					</button>
				)}
				<div className='carousel-content-wrapper'>
					<div
						className={`carousel-content show-${show}`}
						style={{
							transform: `translateX(-${(currentIndex * 100) / show}%)`,
							transition: !transitionEnabled ? 'none' : undefined,
						}}
						onTransitionEnd={() => handleTransitionEnd()}>
						{length > show && isRepeating && renderExtraPrev()}
						{children}
						{length < show && isRepeating && renderExtraNext()}
					</div>
				</div>
				{/* {(isRepeating || currentIndex < length - show) && ( */}
				<button className='right-arrow' onClick={next}>
					&gt;
				</button>
				{/* )} */}
			</div>
		</div>
	);
};

export default Carousel;
