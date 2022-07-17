import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { SearchPage } from '.';
import { screen } from '@testing-library/react';

describe('SearchPage', () => {
    test('renders BooksResult component with an h2 text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
    });
});
