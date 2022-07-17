import React, { useState } from 'react';
import { fireEvent, getByLabelText } from '@testing-library/react';

import { ChildSignUpModal } from '.';

describe('ChildSignUp', () => {
    test('useState setUsername is called', () => {
        const { getByLabelText } = render(<ChildSignUpModal />);
        const usernameInput = getByLabelText('Username');
        fireEvent.change(usernameInput, { target: { value: 'Fred' } });
        expect(usernameInput.value).toBe('Fred');
    });
});
// const mockSetState = jest.fn();

// jest.mock('react', () => ({
//     useState: (initial) => [initial, mockSetState],
// }));

// test('Can increment from 1 to 2', () => {
//     const [username, setUsername] = onUsernameChange('lolaland');

//     setUsername();

//     expect(mockSetState).toHaveBeenCalledWith('lolaland');
// });
