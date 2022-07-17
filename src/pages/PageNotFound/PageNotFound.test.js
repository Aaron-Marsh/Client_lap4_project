import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { PageNotFound } from '.';
import { screen } from '@testing-library/react';

describe('HomePage', () => {
    test('renders BooksResult component with an h2 text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PageNotFound />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
