import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { BooksPage } from '.';
import { screen } from '@testing-library/react';

describe('BooksPage', () => {
    test('renders BooksResult component with an h2 text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <BooksPage />
                </BrowserRouter>
            </Provider>
        );

        expect(
            screen.getByText(/Take a look at all of these amazing books/i)
        ).toBeInTheDocument();
    });
});
