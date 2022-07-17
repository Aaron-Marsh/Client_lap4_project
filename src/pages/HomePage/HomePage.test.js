import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { HomePage } from '.';
import { screen } from '@testing-library/react';

describe('HomePage', () => {
    test('renders BooksResult component with an h2 text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
    });
});
