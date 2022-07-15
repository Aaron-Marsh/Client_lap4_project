import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginModal } from '../LoginModal';

export const Navbar = () => {
    const goTo = useNavigate();

    //here we are going to get data from redux, is the user signed in or not
    // const user = useSelector((state) => state.user);

    // let user = 'Alice';
    let user = '';

    return (
        <nav>
            <NavLink className="home-link" to="/">
                Home
            </NavLink>
            <NavLink
                style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                to="/books"
            >
                Books
            </NavLink>
            <NavLink
                style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                to="/forum"
            >
                Forum
            </NavLink>
            {user ? (
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? 'green' : 'blue',
                    })}
                    to="/profile"
                >
                    Profile
                </NavLink>
            ) : (
                <LoginModal />
            )}
            <button onClick={() => goTo(-1)}>Back</button>
        </nav>
    );
};
