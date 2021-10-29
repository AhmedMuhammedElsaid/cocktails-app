import { render } from "@testing-library/react";
import NoData from "./NoData";

describe("test no data component", () => {
  it("renders without error", () => {
    const { getByTestId,asFragment } = render(<NoData />);
    expect(getByTestId("no-data-testid")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot()
  });
});
