import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BackButton } from '.';

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />, { wrapper: MemoryRouter });
    });

    test('renders a back button', () => {
        const btn = screen.getByRole('button');
        expect(btn.textContent).toContain('Back');
    });

    test('clicking  backbutton is recognised', () => {
        const backButton = screen.getByLabelText('back-button');

        fireEvent.click(backButton);
    });
});
