import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { LogoutButton } from ".";

describe("LogoutButton", () => {
  // const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <LogoutButton />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  // beforeEach(() => {
  //   useDispatchMock.mockClear();
  // });
  // test("logout button appears on render", () => {
  //   const logoutButton = screen.getByRole("button", { name: "Logout" });
  //   expect(logoutButton).toBeInTheDocument();
  // });
  // test("logout button appears", () => {
  //   const dummyDispatch = jest.fn();
  //   useDispatchMock.mockReturnValue(dummyDispatch);
  //   expect(dummyDispatch).toHaveBeenCalled();
  // });
});
