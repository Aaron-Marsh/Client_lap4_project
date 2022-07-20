import React from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '../../actions';

export const LogoutButton = () => {
	const dispatch = useDispatch();

	const onLogoutButtonClick = () => {
		dispatch(setUser(''));
	};

	return (
		<>
			<button className='white-button' onClick={onLogoutButtonClick}>
				Logout
			</button>
		</>
	);
};
