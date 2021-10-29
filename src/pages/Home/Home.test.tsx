import Home from "./Home";
import { customRender } from "utils/testUtils";
import "@testing-library/jest-dom";
import { cleanup, fireEvent } from "@testing-library/react";
const cocktailInput = "cocktail-input-testid",
  loadingSpinner = "loader-spinner-testid";
describe("test default render to the home page", () => {
  afterEach(cleanup);
  it("should render home page without crashing", () => {
    const { asFragment, getByTestId } = customRender(<Home />);
    expect(getByTestId(cocktailInput)).toBeInTheDocument();
    expect(getByTestId(loadingSpinner)).toBeInTheDocument();
    fireEvent.change(getByTestId(cocktailInput), { target: { value: "f" } });
    expect(getByTestId(cocktailInput)).toHaveValue("f");
    expect(asFragment()).toMatchSnapshot();
  });
});
