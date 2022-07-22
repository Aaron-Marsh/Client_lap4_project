import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import { BooksPage } from ".";
import { screen } from "@testing-library/react";

describe("BooksPage", () => {
  test("renders BooksResult component with an h2 text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BooksPage />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText(/Looking for a book to add to your bookshelf?/i)
    ).toBeInTheDocument();
  });

  test("renders BooksResult component with an paragraph which calls to use the search bar", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BooksPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Use the search bar below?/i)).toBeInTheDocument();
  });
});
