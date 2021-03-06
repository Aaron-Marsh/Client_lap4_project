import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LoginModal } from '../';
import { close } from '../../actions';

export function LoginFooter() {
    const [modalShow, setModalShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    const footerClose = useSelector((state) => state.footerClose);
    const loggedIn = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if (footerClose || loggedIn) {
            return;
        } else {
            setTimeout(() => {
                document.querySelector('.login-footer').classList.add('slide');
            }, 100);
        }
    }, []);

    if (footerClose || loggedIn) {
        return '';
    } else {
        return (
            <>
                <div className="login-footer left">
                    <div className="login-footer-text">
                        <h4>Don't miss out on your next favourite book</h4>
                        <p>
                            Sign in or sign up now to discuss all those red
                            herrings!
                        </p>
                    </div>
                    <div className="login-footer-buttons">
                        <button
                            className="dark-button"
                            onClick={() => {
                                setModalShow(true);
                                setRegisterShow(false);
                            }}
                        >
                            Sign in
                        </button>
                        <button
                            className="dark-button"
                            onClick={() => {
                                setModalShow(true);
                                setRegisterShow(true);
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                    <button
                        onClick={() => dispatch(close())}
                        className="login-footer-close"
                        aria-label="login-footer-close"
                    >
                        <span className="sr-only">Close log in footer</span>
                    </button>
                </div>
                <LoginModal
                    show={modalShow}
                    registershow={registerShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }
}
