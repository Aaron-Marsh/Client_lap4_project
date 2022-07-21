import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { LogoutButton } from ".";

describe("LogoutButton", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LogoutButton />
        </BrowserRouter>
      </Provider>
    );
  });
  test("logout button appears on render", () => {
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
