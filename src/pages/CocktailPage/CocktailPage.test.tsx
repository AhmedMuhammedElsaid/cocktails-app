import CocktailPage from "./CocktailPage";
import { customRender } from "utils/testUtils";
import "@testing-library/jest-dom";
import { cocktailDetailsMockedData } from "mocks/mockedData";

const cocktailImgHolder = "cocktail-img-testid",
  cocktailsDetailsHolder = "cocktail-details-testid",
  homeBtn = "home-btn-testid";
describe("Test Cocktail Details Page", () => {
  it("should render the cocktail details page without crashing", () => {
    const { asFragment, getByTestId } = customRender(
      <CocktailPage cocktail={cocktailDetailsMockedData} />
    );
    expect(getByTestId(homeBtn)).toBeInTheDocument();
    expect(getByTestId(cocktailImgHolder)).toBeInTheDocument();
    expect(getByTestId(cocktailsDetailsHolder)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
