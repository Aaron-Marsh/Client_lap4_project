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

    test('it calls props.setShowSignUp when clicking on the create account button', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginModal props={showSignUp} />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.click(createAccountButton);
        expect(
            screen.getByRole('button', { name: 'Create account' })
        ).not.toBeDisabled();
    });
});

// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it('changes value when clicked', () => {
//     const onClick = jest.fn();
//     act(() => {
//         render(<LoginModal onClick={onClick} />, container);
//     });

//     // get a hold of the button element, and trigger some clicks on it
//     const button = document.getElementById('toggle');
//     expect(button.innerHTML).toBe('Create account');

//     act(() => {
//         button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//     });

//     expect(onClick).toHaveBeenCalledTimes(1);
//     expect(button.innerHTML).toBe('Turn off');

//     act(() => {
//         for (let i = 0; i < 5; i++) {
//             button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//         }
//     });

//     expect(onChange).toHaveBeenCalledTimes(6);
//     expect(button.innerHTML).toBe('Turn on');
// });
