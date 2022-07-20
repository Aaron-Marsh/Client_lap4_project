import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { Bookcase } from ".";

describe("Bookcase", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Bookcase books={[]} />
        </BrowserRouter>
      </Provider>
    );
  });
  test("it should render the first ", () => {
    expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
  });
});
