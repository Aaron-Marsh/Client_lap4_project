import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { PostComment } from ".";

describe("PostComment", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostComment />
        </BrowserRouter>
      </Provider>
    );
  });

  test("a line that opens and closes replies exists on the web page", () => {
    const toggleLine = screen.getByLabelText("message-line");

    fireEvent.click(toggleLine);
  });

  // test("oline that opens and closes replies exists on the web page", () => {
  //   const linkToMessagePoster = screen.getByLabelText("link-to-message-poster");

  //   fireEvent.click(linkToMessagePoster);

  //   expect(linkToMessagePoster).toBeInTheDocument();
  // });
});
