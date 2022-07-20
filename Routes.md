# Backend Routes
## Forums:
### Create a new thread: (POST)
/forums/
"title": "new thread here",
 	"username": "user",
 	"first_message": "this is the first message"
	
### Add new message to thread (add message_id to edit existing message): (PATCH)
/forms/:forumId
"method": "thread_message",
"username": "User2",
"message": "this is another message in the thread"

### Add reply to message in thread (add reply_id to edit existing reply): (PATCH)
/forms/:forumId
"method":"reply_message",
"username": "user10",
"reply": "This is a reply to message",
"message_id": "",
"reply_to": ""

### Delete a message in thread: (PATCH)
/forms/:forumId
"method": "delete_message",
"message_id":"123"

### Search by title: (POST)
/forums/search/
"query": "chris second"

## Books:
### Add book to has read: (PATCH)
/users/:username
"method": "add_to_read",
 	"ISBN": "12345",
 	"title":"title",
 	"author":"author"

### Add book to wants to read: (PATCH)
/users/:username
"method": "add_to_to_read",
 	"ISBN": "12345",
 	"title":"title",
 	"author":"author"

### Query a book: (POST)
/books/api/
"query_type": "intitle",
 	"query": "harry potter and the philosopher's stone",
 	"num_results": "3"
	
#### Add a book review: (PATCH)
/books/:bookId
"method": "add_review",
"username": "user",
"review":"This was good"

### Add/remove a rating to a book: (PATCH)
/books/:bookId
"method": "add_rating",
 	"username": "user1",
 	"rating": 4

### Remove book from has read: (PATCH)
"method": "remove_from_read",
 "ISBN": "77777"
