import CocktailInput from "./CocktailInput";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/testUtils";
import "@testing-library/jest-dom";

const cocktailInput = "cocktail-input-testid";
describe("Test Cocktail Input Component", () => {
  it("should render input and simulate the user typing action", () => {
    const { asFragment, getByTestId } = customRender(
      <CocktailInput handleChange={jest.fn()} />
    );
    fireEvent.change(getByTestId(cocktailInput), {
      target: { value: "jon" },
    });
    expect(getByTestId(cocktailInput)).toHaveValue("jon");
    expect(asFragment()).toMatchSnapshot();
  });
});
