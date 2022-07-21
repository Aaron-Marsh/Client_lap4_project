import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { CommentReplies } from ".";

describe("CommentReplies", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CommentReplies
            postId={null}
            username={""}
            loggedIn={"true"}
            serverURL={""}
            messageId={null}
            replies={[]}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("it should render a button enabling to reply", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("button click is recognised", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // expect(button).toBeInTheDocument();
  });

  //   test("should be able to type into reply input element", () => {
  //     const replyInput = screen.getByPlaceholderText(/Add your reply.../i);

  //     fireEvent.change(replyInput, {
  //       target: { value: "I don't like this book" },
  //     });
  //     expect(replyInput.value).toBe("I don't like this book");
  //   });

  //   test("should have emtpy input when submitting the answer", () => {
  //     const replyInput = screen.getByPlaceholderText(/Add your reply.../i);
  //     const button = screen.getByRole("button");

  //     fireEvent.change(replyInput, {
  //       target: { value: "I don't like this book" },
  //     });

  //     fireEvent.click(button);
  //     expect(replyInput.value).toBe("I don't like this book");
  //   });
});
