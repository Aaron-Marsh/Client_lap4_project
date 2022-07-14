import { screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    test('has header as h1 in the document', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const heading = screen.getByText(/Read Herring/i);
        expect(heading).toBeInTheDocument();
    });
});
