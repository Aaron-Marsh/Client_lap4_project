import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useSelector } from 'react';
import store from '../../store';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import '@testing-library/jest-dom';

import { ChildLoginModal } from './index';

import Fetch from './fetch';

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

const server = setupServer(
    rest.get('/users/login', (req, res, ctx) => {
        return res(ctx.json({ greeting: 'succcess' }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ChildLoginModal url="/users/login" />
            </BrowserRouter>
        </Provider>
    );

    const signinButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.click(signinButton);

    await waitFor(() => screen.getByTestId('login-error'));

    expect(screen.getByTestId('login-error')).toHaveTextContent(
        'Missing username/email or password!'
    );
});

test('loads and displays greeting', async () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <ChildLoginModal url="/users/login" />
            </BrowserRouter>
        </Provider>
    );

    const emailInput = getByLabelText('login-email');
    const passwordInput = getByLabelText('password');

    fireEvent.change(emailInput, { target: { value: '23' } });
    fireEvent.change(passwordInput, { target: { value: '23' } });

    const signinButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.click(signinButton);

    await waitFor(() => screen.getByTestId('login-error'));

    expect(screen.getByTestId('login-error')).toHaveTextContent(
        'Login failed!'
    );
});
