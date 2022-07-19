import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

import { LoginFooter } from '.';

describe('LoginFooter', () => {
    test('clicking login button is recognised', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginFooter />
                </BrowserRouter>
            </Provider>
        );

        const signinButton = screen.getByRole('button', { name: 'Sign in' });

        fireEvent.click(signinButton);
    });

    test('clicking sign up button is recognised', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginFooter />
                </BrowserRouter>
            </Provider>
        );

        const signupButton = screen.getByRole('button', { name: 'Sign up' });

        fireEvent.click(signupButton);
    });

    test('clicking footer close button is recognised', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginFooter />
                </BrowserRouter>
            </Provider>
        );

        const footerCloseButton = screen.getByRole('button', {
            name: 'login-footer-close',
        });

        fireEvent.click(footerCloseButton);
    });

    test('LoginModal is not rendered by LoginFooter initially', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginFooter />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    });
});
