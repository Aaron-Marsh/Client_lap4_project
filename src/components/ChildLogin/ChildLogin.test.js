import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useSelector } from 'react';
import store from '../../store';

import { ChildLoginModal } from './index';

describe('ChildLogin', () => {
    test('email input value is updated', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal />
                </BrowserRouter>
            </Provider>
        );
        const emailInput = getByLabelText('login-email');
        fireEvent.change(emailInput, { target: { value: 'Fred@test.com' } });
        expect(emailInput.value).toBe('Fred@test.com');
    });

    test('setPassword value is updated', () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal />
                </BrowserRouter>
            </Provider>
        );
        const passwordInput = getByLabelText('password');
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
            screen.getByRole('button', { name: 'toggle-to-sign-up' })
        ).not.toBeDisabled();
    });

    test('toggle button exists for switching to signup modal', () => {
        const { getByRole } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal />
                </BrowserRouter>
            </Provider>
        );
        const toggleButton = getByRole('button', {
            name: 'toggle-to-sign-up',
        });
        fireEvent.click(toggleButton);
        expect(toggleButton).toBeInTheDocument();
    });
});
