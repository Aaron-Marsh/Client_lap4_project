import React, { useState } from 'react';
import { fireEvent, getByLabelText } from '@testing-library/react';

import { ChildSignUpModal } from '.';

describe('ChildSignUp', () => {
    test('username input value is updated', () => {
        const { getByLabelText } = render(<ChildSignUpModal />);
        const usernameInput = getByLabelText('Username');
        fireEvent.change(usernameInput, { target: { value: 'Fred' } });
        expect(usernameInput.value).toBe('Fred');
    });

    test('email input value is picked up', () => {
        const { getByLabelText } = render(<ChildSignUpModal />);
        const emailInput = getByLabelText('Email address');
        fireEvent.change(emailInput, { target: { value: 'fred@gmail.com' } });
        expect(emailInput.value).toBe('fred@gmail.com');
    });

    test('setPassword value is updated', () => {
        const { getByLabelText } = render(<ChildSignUpModal />);
        const passwordInput = getByLabelText('Password');
        fireEvent.change(passwordInput, { target: { value: 'beautiful' } });
        expect(passwordInput.value).toBe('beautiful');
    });

    test('setConfirmPassword value is updated', () => {
        const { getByLabelText } = render(<ChildSignUpModal />);
        const setConfirmPasswordInput = getByLabelText('Confirm password');
        fireEvent.change(setConfirmPasswordInput, {
            target: { value: 'beautiful' },
        });
        expect(setConfirmPasswordInput.value).toBe('beautiful');
    });
});
