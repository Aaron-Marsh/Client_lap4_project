import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import { ProfilePage } from ".";
import { screen } from "@testing-library/react";

describe("ProfilePage", () => {
  test("renders BooksResult component with 1 h3", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Books I've Read/i)).toBeInTheDocument();
  });

  test("renders BooksResult component with 1 h3", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfilePage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Books I've Read/i)).toBeInTheDocument();
  });
});
