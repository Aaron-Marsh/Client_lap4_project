import { screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useSelector } from 'react';
import store from '../../store';
// import axios from 'axios';

import { ChildLoginModal } from './index';

describe('ChildLogin', () => {
    const correct = (
        <Provider store={store}>
            <BrowserRouter>
                <ChildLoginModal />
            </BrowserRouter>
        </Provider>
    );

    test('username input value is updated', () => {
        const { getByLabelText } = render(correct);
        const usernameInput = getByLabelText('Username');
        fireEvent.change(usernameInput, { target: { value: 'Fred' } });
        expect(usernameInput.value).toBe('Fred');
    });

    test('setPassword value is updated', () => {
        const { getByLabelText } = render(correct);
        const passwordInput = getByLabelText('Password');
        fireEvent.change(passwordInput, { target: { value: 'beautiful' } });
        expect(passwordInput.value).toBe('beautiful');
    });

    test('create account button exists', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal />
                </BrowserRouter>
            </Provider>
        );
        expect(
            screen.getByRole('button', { name: 'Create account' })
        ).not.toBeDisabled();
    });

    test('it calls props.setShowSignUp when clicking on the create account button', () => {
        const showSignUp = false;
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal props={showSignUp} />
                </BrowserRouter>
            </Provider>
        );
        const createAccountButton = screen.getByRole('button', {
            name: 'Create account',
        });
        fireEvent.click(createAccountButton);
        expect(showSignUp.mock.calls.length).toBe(1);
    });
});
