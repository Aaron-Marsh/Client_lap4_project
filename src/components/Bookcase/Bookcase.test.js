import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { Bookcase } from ".";

describe("Bookcase", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Bookcase books={[]} />
      </BrowserRouter>
    </Provider>
  );

  test("it has a message that invites users to read ", async () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
