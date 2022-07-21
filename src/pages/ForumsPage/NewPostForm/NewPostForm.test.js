import { screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { NewPostForm } from ".";

describe("NewPostForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPostForm />
        </BrowserRouter>
      </Provider>
    );
  });
  test("on render user can see a create new post button", () => {
    const createPostButton = screen.getByRole("button", {
      name: "Create New Post",
    });
    expect(createPostButton).toBeInTheDocument();
  });

  test("on the button click input field appears", () => {
    const createPostButton = screen.getByRole("button", {
      name: "Create New Post",
    });

    const titleInput = screen.queryByRole("input", {
      name: "title",
    });

    fireEvent.click(createPostButton);

    expect(titleInput).not.toBeInTheDocument();
  });

  test("on the button click textarea field appears", () => {
    const createPostButton = screen.getByRole("button", {
      name: "Create New Post",
    });

    const messageTextarea = screen.queryByRole("textarea", {
      name: "Message",
    });

    fireEvent.click(createPostButton);

    expect(messageTextarea).not.toBeInTheDocument();
  });

  test("on render user can see a create new post button", () => {
    const createPostButton = screen.getByRole("button", {
      name: "Create New Post",
    });
    expect(createPostButton).toBeInTheDocument();
  });
});
