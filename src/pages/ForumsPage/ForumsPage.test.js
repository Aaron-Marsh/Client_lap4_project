import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { ForumsPage } from '.';
import { screen } from '@testing-library/react';

describe('ForumsPage', () => {
    test('has a searchbar component with a label of "Search', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ForumsPage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
    });
});