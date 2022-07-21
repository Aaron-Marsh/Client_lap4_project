import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { CommentReply } from ".";

describe("CommentReply", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CommentReply
            postId={null}
            onComment={""}
            username={""}
            loggedIn={"true"}
            serverURL={""}
            replyId={null}
            replyUsername={""}
            replyText={""}
            replyTo={""}
            onDelete={"false"}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("it should render commentInput element", () => {
    const commentInput = screen.getByPlaceholderText(/Add your reply.../i);
    expect(commentInput).toBeInTheDocument();
  });

  test("should be able to type into commentInput", () => {
    const commentInput = screen.getByPlaceholderText(/Add your reply.../i);

    fireEvent.change(commentInput, {
      target: { value: "I disagree with you" },
    });
    expect(commentInput.value).toBe("I disagree with you");
  });

  test("should have emtpy commentInput when ", () => {
    const commentInput = screen.getByPlaceholderText(/Add your reply.../i);
    const button = screen.getByRole("button");

    fireEvent.change(commentInput, {
      target: { value: "No, I agree, actually" },
    });

    fireEvent.click(button);
    expect(commentInput.value).toBe("");
  });
});
