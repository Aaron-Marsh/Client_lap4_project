import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { LoadScreen } from ".";

describe("LoadScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoadScreen />
        </BrowserRouter>
      </Provider>
    );
  });
  test("when it renders during loading it shows a pile of books", () => {
    const loadingLogo = screen.getByLabelText("loading-logo");
    expect(loadingLogo).toBeInTheDocument();
  });

  test("when it renders a unordered list", () => {
    const unorderedListOfBooks = screen.getByLabelText(
      "unordered-list-of-books"
    );
    expect(unorderedListOfBooks).toBeInTheDocument();
  });
});
