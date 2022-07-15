import { screen } from '@testing-library/react';
import ForumsPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    test('has header as h2 in the document', () => {
        render(
            <BrowserRouter>
                <ForumsPage />
            </BrowserRouter>
        );
        const heading = screen.getByText(/Forums page/i);
        expect(heading).toBeInTheDocument();
    });
});
