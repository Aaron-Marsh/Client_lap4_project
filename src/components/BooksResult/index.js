import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";
import {
  SearchBar,
  BookModal,
  Books,
  PaginationComponent,
  LoadScreen,
} from "../";

export const BooksResult = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Modal
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(12);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect, search Google api through server
  const fetchBooks = async (searchTerm) => {
    setError(false);
    setLoading(true);
    try {
      const sendData = {
        query_type: "intitle",
        query: searchTerm,
        num_results: "36",
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(sendData),
        options
      );

      setBooks(data);
      setLoading(false);
    } catch (err) {
      setBooks([]);
      setError(
        "Sorry! It seems that the book you are searching for doesn't exist!"
      );

      setLoading(false);

      throw new Error(err.message);
    }
  };

  useEffect(() => {
    
    const fetchBooks = async () => {
      setLoading(true);
      try {
        let queryOptions = ["fishing", "harry potter", "game of thrones", "catch 22", "firefly lane", "lords of the bow", "five love languages", "don quixote", "a tale of two cities", "sherlock" ]
        let queryChosen = queryOptions[Math.floor(Math.random() * queryOptions.length)]
        const sendData = {
          query_type: "intitle",
          query: 'fishing',
          num_results: "36",
        };
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let { data } = await axios.post(
          `https://read-herring.herokuapp.com/books/api/`,
          JSON.stringify(sendData),
          options
        );
        setBooks(data);
        setLoading(false);
      } catch (err) {
        alert("book does not exist, please try again");

        setLoading(false);

        throw new Error(err.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="books-wrapper">
      <div className="search-books-container">
        <h2>Looking for a book to add to your bookshelf?</h2>
        <p>Use the search bar below</p>

        <SearchBar getResults={fetchBooks} />
      </div>

      <div className="error-message">{error}</div>

      {loading && <LoadScreen />}

      {!loading && currentBooks && (
        <>
          <Books
            books={currentBooks}
            loading={loading}
            setModalData={setModalData}
            setOpen={setOpen}
          >
            <PaginationComponent
              booksPerPage={booksPerPage}
              totalBooks={books.length}
              paginate={paginate}
            />
          </Books>
          <BookModal modalData={modalData} open={open} />
        </>
      )}
    </div>
  );
};
