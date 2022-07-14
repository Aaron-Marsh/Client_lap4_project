import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const goTo = useNavigate();

	return (
		<nav>
			<NavLink className='home-link' to='/'>
				Home
			</NavLink>
			<NavLink
				style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
				to='/books'>
				Books
			</NavLink>
			<NavLink
				style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
				to='/forum'>
				Forum
			</NavLink>
			<NavLink
				style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
				to='/login'>
				Login
				{/* supposed to be modal but will be fixed later */}
			</NavLink>
			<button onClick={() => goTo(-1)}>Back</button>
		</nav>
	);
};
