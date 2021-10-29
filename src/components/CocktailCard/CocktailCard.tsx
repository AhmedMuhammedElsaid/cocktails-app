import React, { FunctionComponent } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import styles from "./CocktailCard.module.scss";
import { cocktailSchema } from "utils/types";
import { Link } from "react-router-dom";
interface Props {
  cocktail: cocktailSchema;
  hideDesc?: boolean;
}

const CocktailCard: FunctionComponent<Props> = ({ cocktail, hideDesc }) => {
  const { strCategory, strDrink, strDrinkThumb, strInstructionsDE, idDrink } =cocktail;
  return (<>
          {/* 
        // @ts-ignore */}
          <Card component={Link} to={`/cocktail-details/${idDrink}`}
            className={styles.Card}
            data-testid="cocktail-card-testid"
          >
            <CardActionArea>
              <CardMedia
                className={styles.Card__Img}
                component="img"
                height="250"
                image={strDrinkThumb}
                alt={strDrink}
                data-testid="cocktail-img-testid"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  data-testid="cocktail-name-testid"
                  className="Cocktail__Name"
                >
                  {strDrink}
                </Typography>
                {!hideDesc && (
                  <>
                    {" "}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="Category"
                      data-testid="cocktail-category-testid"
                    >
                      {strCategory}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Description"
                      data-testid="cocktail-description-testid"
                    >
                      {strInstructionsDE?.slice(0, 120)}...
                    </Typography>
                  </>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
          </>
  );
};
export default CocktailCard;
