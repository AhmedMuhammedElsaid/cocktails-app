import { cocktailCardMockedData } from "mocks/mockedData";
import { customRender } from "utils/testUtils";
import CocktailCard from "./CocktailCard";

const cocktailName = "cocktail-name-testid",
  cocktailImg = "cocktail-img-testid",
  cocktailCategory = "cocktail-category-testid",
  cocktailDesc = "cocktail-description-testid",
  noCocktailData = "no-cocktail-testid";
describe("Test Cocktail Card Item to render without Errors", () => {
  it("render card item details without crashing", () => {
    const { asFragment, getByTestId, queryByTestId } = customRender(
      <CocktailCard cocktail={cocktailCardMockedData} />
    );
    expect(queryByTestId(noCocktailData)).not.toBeInTheDocument();
    expect(getByTestId(cocktailName)).toHaveTextContent(
      cocktailCardMockedData.strDrink
    );
    expect(getByTestId(cocktailCategory)).toHaveTextContent(
      cocktailCardMockedData.strCategory
    );
    expect(getByTestId(cocktailDesc)).toHaveTextContent(
      cocktailCardMockedData.strInstructionsDE
    );
    expect(getByTestId(cocktailImg)).toHaveAttribute(
      "src",
      cocktailCardMockedData.strDrinkThumb
    );

    // take a snapshot to the component in order to have an image
    // to compare with future changes image
    expect(asFragment()).toMatchSnapshot();
  });
});
