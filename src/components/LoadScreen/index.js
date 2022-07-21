import React from "react";

import "./style.css";

export const LoadScreen = () => {
  return (
    <div className="load-screen-wrapper" aria-label="loading-logo">
      <div className="bookshelf_wrapper">
        <ul className="books_list" aria-label="unordered-list-of-books">
          <li className="book_item first"></li>
          <li className="book_item second"></li>
          <li className="book_item third"></li>
          <li className="book_item fourth"></li>
          <li className="book_item fifth"></li>
          <li className="book_item sixth"></li>
        </ul>
        <div className="shelf"></div>
      </div>
    </div>
  );
};
