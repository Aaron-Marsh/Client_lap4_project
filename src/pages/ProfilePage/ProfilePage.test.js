import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { ProfilePage } from '.';
import { screen } from '@testing-library/react';

describe('ProfilePage', () => {
    test('renders BooksResult component with an h2 text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ProfilePage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Profile page/i)).toBeInTheDocument();
    });
});
