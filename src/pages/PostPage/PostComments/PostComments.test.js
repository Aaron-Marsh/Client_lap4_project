import { useEffect } from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import { renderHook, act } from '@testing-library/react-hooks';

import { PostComments } from '.';

describe('PostComment', () => {
    test('it renders a comment in case there is a comment', () => {
        const postMessages = [
            {
                message_username: 'fred',
                message: 'I liked that book',
                replies: 0,
                loggedIn: loggedIn,
                postId: 127,
                serverURL: serverURL,
                messageId: 5,
                username,
            },
            {
                message_username: 'fred',
                message: 'I liked that book',
                replies: 0,
                loggedIn: loggedIn,
                postId: 127,
                serverURL: serverURL,
                messageId: 5,
                username,
            },
        ];
        var loggedIn = true;
        var postId = 40;
        var serverURL = serverURL;
        var username = 'fred';

        // var replies = [{ one: 1 }, { two: 2 }];
        // useEffect(() => {
        //     setRepliesArray(replies.reverse());
        // }, []);
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PostComments
                        postMessages={postMessages}
                        // loggedIn={loggedIn}
                        // postId={postId}
                        // serverURL={serverURL}
                        // username={username}
                    />
                </BrowserRouter>
            </Provider>
        );

        const contactNames = getAllByTestId('contact-name').map(
            (li) => li.textContent
        );

        expect(
            screen.getByTestId(/container post-comments/i)
        ).toBeInTheDocument();
    });
});

// const fakeContacts = [
//     { id: 1, name: 'Bob' },
//     { id: 2, name: 'Marcy' },
// ];
// const { getAllByTestId } = render(<ContactList contacts={fakeContacts} />);
// const contactNames = getAllByTestId('contact-name').map((li) => li.textContent);
// const fakeContactNames = fakeContacts.map((c) => c.name);
// expect(contactNames).toEqual(fakeContactNames);
