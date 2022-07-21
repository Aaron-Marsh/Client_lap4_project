import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { NewCommentForm } from ".";

describe("NewCommentForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewCommentForm
            postId={null}
            onComment={""}
            username={""}
            loggedIn={"true"}
            serverURL={""}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("it should render textarea element", () => {
    const textarea = screen.getByPlaceholderText(/Add a comment here.../i);
    expect(textarea).toBeInTheDocument();
  });

  test("should be able to type into textarea", () => {
    const textarea = screen.getByPlaceholderText(/Add a comment here.../i);

    fireEvent.change(textarea, {
      target: { value: "I like how practical this book is! Love it!" },
    });
    expect(textarea.value).toBe("I like how practical this book is! Love it!");
  });

  test("should have emtpy textarea when ", () => {
    const textarea = screen.getByPlaceholderText(/Add a comment here.../i);
    const button = screen.getByRole("button");

    fireEvent.change(textarea, {
      target: { value: "I like how practical this book is! Love it!" },
    });

    fireEvent.click(button);
    expect(textarea.value).toBe("I like how practical this book is! Love it!");
  });
});
