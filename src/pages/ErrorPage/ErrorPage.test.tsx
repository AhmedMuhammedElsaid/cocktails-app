import { customRender } from "utils/testUtils";
import ErrorPage from "./ErrorPage";

const messageHolder = "error-msg-testid",
  homeBtn = "go-home-testid";
describe("Test error page rendering without crashing", () => {
  it("renders without error", () => {
    const { getByTestId, asFragment } = customRender(<ErrorPage />);
    expect(getByTestId(messageHolder)).toBeInTheDocument();
    expect(getByTestId(homeBtn)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
