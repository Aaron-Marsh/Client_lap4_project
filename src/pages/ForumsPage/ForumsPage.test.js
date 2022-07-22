import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import { ForumsPage } from ".";
import { screen } from "@testing-library/react";

describe("ForumsPage", () => {
  test('has a searchbar component with a label of "Search', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForumsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Welcome to the Forums/i)).toBeInTheDocument();
  });

  test("there is a button for user to create a new post", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForumsPage />
        </BrowserRouter>
      </Provider>
    );

    const searchButton = screen.getByRole("button", {
      name: "Create New Post",
    });

    expect(searchButton).toBeInTheDocument();
  });

  test("has a input for users to search for discussion", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForumsPage />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for a discussion here..."
    );

    expect(searchInput).toBeInTheDocument();
  });

  test("there is another button for submitting the search request for user", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForumsPage />
        </BrowserRouter>
      </Provider>
    );

    const searchButton = screen.getByRole("button", { name: "Search" });

    expect(searchButton).toBeInTheDocument();
  });
});
