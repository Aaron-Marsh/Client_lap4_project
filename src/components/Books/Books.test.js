import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Books } from '.';

describe('Books', () => {
    test('landing on a Home page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Books />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
    });
});
