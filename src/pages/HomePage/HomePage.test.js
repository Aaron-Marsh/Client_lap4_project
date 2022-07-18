import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { HomePage } from '.';
import { screen, waitFor } from '@testing-library/react';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('HomePage', () => {
    test('Find out if new fish are rendered on page', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        );
        const backgroundLower = screen.getByTestId('background-lower');
        await waitFor(() => {
            expect(backgroundLower.getElementsByClassName('newFish'));
        });
    });
});
