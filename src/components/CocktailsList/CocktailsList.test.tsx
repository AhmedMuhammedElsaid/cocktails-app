import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CocktailsList from "./CocktailsList";
import { customRender } from "utils/testUtils";
import { cocktailListMockedData } from "mocks/mockedData";

const cocktailListHolder = "cocktail-card-testid";
describe("Test Cocktail List Component", () => {
  afterEach(cleanup);
  it("should render all cocktails data passed from outside", () => {
    const { asFragment, getAllByTestId } = customRender(
      <CocktailsList cocktails={cocktailListMockedData} />
    );

    expect(getAllByTestId(cocktailListHolder)).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });
  it(`Show no-data component in case didn't pass cocktails data`, () => {
    const { asFragment, queryByTestId } = customRender(<CocktailsList />);
    expect(queryByTestId(cocktailListHolder)).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
