import { render } from "@testing-library/react";
import { cocktailDetailsMockedData } from "mocks/mockedData";
import CocktailDetails from "./CocktailDetails";

describe("test cocktail details component", () => {
  it("render cocktail details   without error", () => {
    const { getByTestId,asFragment } = render(<CocktailDetails handleGetSimilarCocktailToIngredient={jest.fn()} currentCocktail={cocktailDetailsMockedData} />);
    expect(asFragment()).toMatchSnapshot()
  });
  it("render cocktail details without passing data", () => {
    const { getByTestId,asFragment } = render(<CocktailDetails handleGetSimilarCocktailToIngredient={jest.fn()}  />);
    expect(asFragment()).toMatchSnapshot()
  });
});
