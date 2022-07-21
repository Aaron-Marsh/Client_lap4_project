import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { LoadScreen } from ".";

describe("App", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
  test("", () => {
    render();

    expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
  });
});
