import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookModal } from "../BookModal";

export const Bookcase = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [modalData, setModalData] = useState(null);
  console.log(data);
  function randomNumber() {
    return `${Math.floor(Math.random() * 4) + 1}`;
  }

  function myRandomClass() {
    return `bookshelf-book book-${randomNumber()}`;
  }
  function myFavouriteClass() {
    return `bookshelf-book book-favourite`;
  }

  useEffect(() => {
    if (data == undefined) return;
    setUserData(data);
  }, [data]);

  const findBook = async (isbn) => {
    try {
      const sendData = {
        query_type: "isbn",
        query: isbn,
        num_results: "1",
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(sendData),
        options
      );
      setOpen((prev) => !prev);

      setModalData(data[0]);
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return (
    <>
      <div className="bookshelf">
        {userData.length != 0 ? (
          userData.map((book) =>
            book.favourited ? (
              <div className="book-tilted">
                <div
                  key={book.ISBN}
                  className={myFavouriteClass()}
                  onClick={() => {
                    findBook(book.ISBN);
                  }}
                >
                  <h2>{book.title}</h2>
                </div>
              </div>
            ) : (
              <div className="not-tilted">
                <div
                  key={book.ISBN}
                  className={myRandomClass()}
                  onClick={() => {
                    findBook(book.ISBN);
                  }}
                >
                  <h2>{book.title}</h2>
                </div>
              </div>
            )
          )
        ) : (
          <div className={myRandomClass()}>
            <h2>Time to read some books!</h2>
          </div>
        )}

        <BookModal modalData={modalData} open={open} />
      </div>
    </>
  );
};
