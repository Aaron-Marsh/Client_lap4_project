import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { NewReplyForm } from ".";

describe("NewReplyForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewReplyForm
            postId={null}
            username={""}
            loggedIn={"true"}
            serverURL={""}
            isReplyShown={"true"}
            isWidth={true}
            messageId={null}
            onNewReply={""}
            replyRef={null}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("it should render reply input element", () => {
    const replyInput = screen.getByPlaceholderText(/Add your reply.../i);
    expect(replyInput).toBeInTheDocument();
  });

  test("should be able to type into reply input element", () => {
    const replyInput = screen.getByPlaceholderText(/Add your reply.../i);

    fireEvent.change(replyInput, {
      target: { value: "I don't like this book" },
    });
    expect(replyInput.value).toBe("I don't like this book");
  });

  test("should have emtpy input when submitting the answer", () => {
    const replyInput = screen.getByPlaceholderText(/Add your reply.../i);
    const button = screen.getByRole("button");

    fireEvent.change(replyInput, {
      target: { value: "I don't like this book" },
    });

    fireEvent.click(button);
    expect(replyInput.value).toBe("I don't like this book");
  });
});
