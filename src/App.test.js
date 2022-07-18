import { screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
    test('landing on a Home page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
    });
});
