import React, { useState, useEffect } from "react";

import { BookModal } from "../BookModal";

export const Bookcase = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function randomNumber() {
    return `${Math.floor(Math.random() * 4) + 1}`;
  }

  function myRandomClass() {
    return `bookshelf-book book-${randomNumber()}`;
  }
  return (
    <>
      <div className="bookshelf">
        {data &&
          data.map((book) => (
            <div
              key={book.ISBN}
              className={myRandomClass}
              onClick={() => {
                setOpen((prev) => !prev);
                setModalData(book);
              }}
            >
              <h2>{book.title}</h2>
            </div>
          ))}
        <div className={myRandomClass()}>
          <h2>Harry Potter</h2>
        </div>
        <div className={myRandomClass()}>
          <h2>Introducing HTML5</h2>
        </div>
        <div className={myRandomClass()}>
          <h2>CSS For Dummies</h2>
        </div>
        <div className={myRandomClass()}>
          <h2>Time to read some books!</h2>
        </div>
        <BookModal modalData={modalData} open={open} />
      </div>
    </>
  );
};
