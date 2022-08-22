import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

import { PostHeader } from ".";

describe("PostHeader", () => {
  test("it has a link there", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostHeader />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId(/message-username/i)).toBeInTheDocument();
  });
});

//   const postHeader = container.getElementsByClassName(
//     "post-header-container"
//   );
//   expect(postHeader).toBeTruthy();
// });
// });
