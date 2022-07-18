import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from 'react-redux';

import "./style.css";
import { SearchBar } from "../SearchBar";
/* import { MultiCarousel } from '../Carousel'; */
// import { getResult } from '../../actions';

export const BooksResult = () => {
  const [books, setBooks] = useState([]);
  const [herringCarousel, setHerringCarousel] = useState([]);
  const [fishCarousel, setFishCarousel] = useState([]);
  const [cookingCarousel, setCookingCarousel] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // fetch on load
  const fetchHerringBooksOnLoad = async () => {
    try {
      const data = {
        query_type: "intitle",
        query: "herring",
        num_results: 10,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(data),
        options
      );

      setHerringCarousel(data.items);
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const fetchFishBooksOnLoad = async () => {
    try {
      const data = {
        query_type: "intitle",
        query: "fish",
        num_results: 10,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(data),
        options
      );

      setFishCarousel(data.items);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const fetchCookingBooksOnLoad = async () => {
    try {
      const data = {
        query_type: "intitle",
        query: "cooking",
        num_results: 10,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(data),
        options
      );

      setCookingCarousel(data.items);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchHerringBooksOnLoad();
    fetchFishBooksOnLoad();
    fetchCookingBooksOnLoad();
  }, []);

  // post search to server
  // req.body = query_type: intitle, query: searchTerm, num_results: whatevs

  // useEffect, search Google api through server
  const fetchBooks = async (searchTerm) => {
    try {
      const data = {
        query_type: "intitle",
        query: { searchTerm },
        num_results: 10,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `https://read-herring.herokuapp.com/books/api/`,
        JSON.stringify(data),
        options
      );

      setBooks(data.items);
      setHasSearched(true);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    console.log("setBooks", books);
    console.log("hasSearched", hasSearched);
  }, [books, hasSearched]);

  // console.log(books);

  return (
    <>
      <h2>Take a look at all of these amazing books!</h2>
      <p>WOW!</p>
      <SearchBar getResults={fetchBooks} />
      {/* <div className='books-result-wrapper'> */}
      {/* THIS CODE WILL BE USED WHEN EVERYTHING WORKS!!! */}
      {/* {herringCarousel.map((book) => (
					<div
						role='img'
						aria-label='Books with Herring in the title'
						className='image-container'
						key={book.id}>
						<img
							alt={book.volumeInfo.title}
							src={book.volumeInfo.imageLinks?.thumbnail}
						/>

					</div>
				))}
				;
				{fishCarousel.map((book) => (
					<div
						role='img'
						aria-label='Books with Fish in the title'
						className='image-container'
						key={book.id}>
						<img
							alt={book.volumeInfo.title}
							src={book.volumeInfo.imageLinks?.thumbnail}
						/>
					</div>
				))}
				;
				{cookingCarousel.map((book) => (
					<div
						role='img'
						aria-label='Books with Cooking Fish in the title'
						className='image-container'
						key={book.id}>
						<img
							alt={book.volumeInfo.title}
							src={book.volumeInfo.imageLinks?.thumbnail}
						/>
					</div>

				))} */}
      {/* </div> */}
      {hasSearched && (
        <div className="book-grid">
          {books.map((book) => (
            <div role="img" className="image-container" key={book.id}>
              <img
                alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks.thumbnail}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
