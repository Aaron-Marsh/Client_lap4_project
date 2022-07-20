import React, { useState, useEffect } from "react";

import { BookModal } from "../BookModal";

export const Bookcase = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  return (
    <>
      <div className="bookshelf">
        {data &&
          data.map((book) => (
            <div
              key={book.ISBN}
              className="bookshelf-book"
              onClick={() => {
                setOpen((prev) => !prev);
                //   setModalData(book);
              }}
            >
              <h2>{book.title}</h2>
            </div>
          ))}
        <div className="bookshelf-book book-1">
          <h2>Harry Potter</h2>
        </div>
        <div className="bookshelf-book book-2">
          <h2>Introducing HTML5</h2>
        </div>
        <div className="bookshelf-book book-3">
          <h2>CSS For Dummies</h2>
        </div>
        <div className="bookshelf-book book-4">
          <h2>Time to read some books!</h2>
        </div>
        {/* <BookModal
          modalData={modalData}
          open={open}
          addToHasRead={addToHasRead}
          addToWantsToRead={addToWantsToRead}
        /> */}
      </div>
    </>
  );
};
