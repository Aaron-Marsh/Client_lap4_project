import React, { useState } from 'react';
import { fireEvent, getByLabelText, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

import { ChildSignUpModal } from '.';

describe('ChildSignUp', () => {
    test('username input value is updated', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );
        const usernameInput = getByLabelText('username');
        fireEvent.change(usernameInput, { target: { value: 'Fred' } });
        expect(usernameInput.value).toBe('Fred');
    });

    test('email input value is picked up', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );
        const emailInput = getByLabelText('email');
        fireEvent.change(emailInput, { target: { value: 'fred@gmail.com' } });
        expect(emailInput.value).toBe('fred@gmail.com');
    });

    test('setPassword value is updated', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );
        const passwordInput = getByLabelText('password');
        fireEvent.change(passwordInput, { target: { value: 'beautiful' } });
        expect(passwordInput.value).toBe('beautiful');
    });

    test('setConfirmPassword value is updated', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );
        const setConfirmPasswordInput = getByLabelText('confirm-password');
        fireEvent.change(setConfirmPasswordInput, {
            target: { value: 'beautiful' },
        });
        expect(setConfirmPasswordInput.value).toBe('beautiful');
    });

    test('toggle button exists for switching to login modal', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );
        const toggleButton = getByLabelText('toggle-to-log-in');
        fireEvent.click(toggleButton);
        expect(toggleButton).toBeInTheDocument();
    });
});
