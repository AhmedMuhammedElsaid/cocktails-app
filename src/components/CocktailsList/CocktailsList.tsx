import React, { FunctionComponent } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import { Grid } from "@material-ui/core";
import { cocktailSchema } from "utils/types";
import styles from "./CocktailsList.module.scss";

interface Props {
  cocktails: cocktailSchema[] | null;
}
const CocktailsList: FunctionComponent<Props> = ({ cocktails }) => {
  return (
    <Grid className={styles.Container} data-testid="card-holder-testid">
      {cocktails?.map((cocktail) => (
        <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </Grid>
  );
};
export default CocktailsList;
