import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import styles from "./CocktailDetails.module.scss";
import { cocktailSchema } from "utils/types";

// component to render the cocktail details
interface Props {
  currentCocktail: cocktailSchema;
  handleGetSimilarCocktailToIngredient: (value: string) => void;
}
const CocktailDetails: FunctionComponent<Props> = ({
  currentCocktail,
  handleGetSimilarCocktailToIngredient,
}) => {
  const grabImportantDetails: any = { ...currentCocktail };
  /*
  we loop over the cocktail props but we dont need to repeat [name,category , image] 
  as we already rendered them on the top
  */
  delete grabImportantDetails?.strDrinkThumb;

  delete grabImportantDetails?.strDrink;
  delete grabImportantDetails?.strImageSource;
  delete grabImportantDetails?.strCategory;
  return (
    <div data-testid="cocktail-details-testid">
      {Object.keys(grabImportantDetails).map(
        (property: string, index: number) => {
          if (property.includes("strIngredient")) {
            // in case the property is ingredient , i want it to be clickable to be able to see similar cocktails which use that ingredient
            return (
              <Typography
                key={index}
                onClick={() =>
                  handleGetSimilarCocktailToIngredient(
                    grabImportantDetails[property]
                  )
                }
                className={styles.CocktailDetails__Ingredient}
                variant="h6"
                // removing str from the beginning of every property
              >{`${property?.slice(3, property.length)} : ${
                grabImportantDetails[property]
              }`}</Typography>
            );
          } else {
            // otherwise i want just to render it
            return (
              <Typography
                className={styles.CocktailDetails__Info}
                key={index}
                variant="h6"
              >
                <span>{`${
                  // removing str from the beginning of every property
                  property.includes("str")
                    ? property.slice(3, property.length)
                    : property
                } : `}</span>
                {`${grabImportantDetails[property]?.slice(0, 150)}`}
              </Typography>
            );
          }
        }
      )}
    </div>
  );
};
export default CocktailDetails;
