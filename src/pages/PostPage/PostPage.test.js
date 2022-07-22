import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { PostPage } from ".";

describe("PostPage", () => {
  test("on render it shows a welcome message", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Welcome to post page/i)).toBeInTheDocument();
  });
});
