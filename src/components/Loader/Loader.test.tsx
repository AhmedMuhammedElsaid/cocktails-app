import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("test loader component", () => {
  it("renders without error", () => {
    const { getByTestId,asFragment } = render(<Loader />);
    expect(getByTestId("loader-spinner-testid")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot()
  });
});
