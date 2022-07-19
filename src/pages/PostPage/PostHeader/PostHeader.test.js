import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';

import { PostHeader } from '.';

describe('PostHeader', () => {
    test('it has a link there', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PostHeader />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByTestId(/message-username/i)).toBeInTheDocument();
    });
});
