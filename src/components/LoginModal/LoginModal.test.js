import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../store';
import { screen } from '@testing-library/react';

import { LoginModal } from '.';
import { ChildLoginModal } from '../ChildLogin';
import { ChildSignUpModal } from '../ChildSignUp';

describe('LoginModal', () => {
    test('renders ChildLogin component with a button text which says Create Account', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildLoginModal />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    });

    test('renders ChildSignUp component with a button text which says Already have an account? Sign in', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ChildSignUpModal />
                </BrowserRouter>
            </Provider>
        );

        expect(
            screen.getByText(/Already have an account/i)
        ).toBeInTheDocument();
    });
});
