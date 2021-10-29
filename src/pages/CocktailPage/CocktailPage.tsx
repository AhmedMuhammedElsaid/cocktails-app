import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { CardMedia, Divider, Grid, Typography } from "@material-ui/core";
import Loader from "components/Loader";
import axiosInstance from "utils/axiosInstance";
import { Fade } from "react-reveal";
import { AxiosResponse, cocktailSchema } from "utils/types";
import styles from "./styles.module.scss";
import { cleanObject } from "utils/helpers";
import CocktailDetails from "../../components/CocktailDetails";
import { redirectToErrorPage } from "utils/history";
import { Link } from "react-router-dom";
import CocktailCard from "components/CocktailCard";
import CocktailModal from "../../components/CocktailModal";

interface Props {
  cocktail?: cocktailSchema;
}
const CocktailPage: FunctionComponent<Props> = ({ cocktail }) => {
  // grab the id to the selected cocktail.
  const { id }: { id: string } = useParams();

  const [currentCocktail, setCurrentCocktail] = useState<cocktailSchema | null>(
    cocktail || null
  );
  const ingredientNameRef = useRef("");
  const [isOpen, setIsOpen] = useState(false);

  // close & open modal methods
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  // fetch the selected cocktail and render it's details
  const handleGetCocktailDetails = async () => {
    const { drinks }: AxiosResponse = await axiosInstance.get(
      `lookup.php?i=${id}`
    );
    if (drinks) {
      // remove null values from the cocktail as it being sent with many null values
      const cleanedCocktail: cocktailSchema = cleanObject({ ...drinks[0] });
      setCurrentCocktail(cleanedCocktail);
    } else {
      redirectToErrorPage();
    }
  };

  const [similarCocktail, setSimilarCocktail] = useState<
    cocktailSchema[] | null
  >(null);

  // fetch the similar cocktails which use the same ingredient
  const handleGetSimilarCocktails = async (ingredient: string) => {
    const { drinks }: AxiosResponse = await axiosInstance.get(
      `filter.php?i=${ingredient}`
    );
    setSimilarCocktail(drinks);
  };
  const handleGetSimilarCocktailToIngredient = async (
    ingredientName: string
  ) => {
    //performance balance, this condition cash the data for same ingredient ,
    // Ex, user click over coffee , modal will show up with cocktails use coffee , if the user close the modal and click coffee again,
    // i wont fire an api call since i already have the vodica cocktails cashed
    if (ingredientName !== ingredientNameRef.current) {
      // get similar cocktail that use the same ingredient
      await handleGetSimilarCocktails(ingredientName);
    }
    //store ingredient name to render it
    ingredientNameRef.current = ingredientName;

    handleOpenModal();
  };
  useEffect(() => {
    handleGetCocktailDetails();
  }, [id]);

  if (!currentCocktail) return <Loader />;
  return (
    <>
      <Link className={styles.HomeBtn} to="/" data-testid="home-btn-testid">
        Home
      </Link>
      <Grid container className={styles.DetailsPage}>
        <Fade bottom duration={2000} distance="40px">
          <Grid
            container
            item
            sm={10}
            className={styles.DetailsPage__Container}
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CardMedia
                className={styles.DetailsPage__Container__Img}
                component="img"
                title="Cocktail Image"
                height="250"
                data-testid="cocktail-img-testid"
                image={currentCocktail?.strDrinkThumb}
                alt="cocktail pic"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h4">{currentCocktail?.strDrink}</Typography>
              <Typography variant="h5">
                {currentCocktail?.strCategory}
              </Typography>
              {
                <CocktailDetails
                  currentCocktail={currentCocktail}
                  handleGetSimilarCocktailToIngredient={
                    handleGetSimilarCocktailToIngredient
                  }
                />
              }
            </Grid>
          </Grid>
        </Fade>
      </Grid>
      {/* Modal Content that popups while clicking over Ingredient with similar cocktails that use the same ingredient which clicked */}
      <CocktailModal onClose={handleCloseModal} open={isOpen}>
        <Fade top duration={1000}>
          <h2>{`
              cocktails that also use ${ingredientNameRef.current}
            `}</h2>
          <h3>Click Over The Cocktail To View It's Details</h3>
        </Fade>
        <Divider light style={{ margin: "1.5rem 0" }} />
        <Fade bottom duration={1000}>
          <Grid container>
            {similarCocktail ? (
              <Grid container spacing={2} onClick={handleCloseModal}>
                {similarCocktail?.map((cocktail, index) => (
                  <CocktailCard hideDesc cocktail={cocktail} key={index} />
                ))}
              </Grid>
            ) : (
              <Fade top duration={1000}>
                <Loader />
              </Fade>
            )}
          </Grid>
        </Fade>
      </CocktailModal>
    </>
  );
};

export default CocktailPage;
