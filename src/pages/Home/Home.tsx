import React, {
  useState,
  useCallback,
  useEffect,
  FunctionComponent,
} from "react";
import { Divider, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import debounce from "lodash.debounce";
import CocktailInput from "components/CocktailInput";
import CocktailList from "../../components/CocktailsList";
import { AxiosResponse, cocktailSchema } from "utils/types";
import CocktailCard from "components/CocktailCard";
import Loader from "components/Loader";

import axiosInstance from "utils/axiosInstance";
import { toast } from "react-toastify";

const Home: FunctionComponent = () => {
  const [cocktailName, setCocktailName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [randomCocktail, setRandomCocktail] = useState<null | cocktailSchema>(
    null
  );
  const [currentCocktails, setCurrentCocktails] = useState<
    cocktailSchema[] | null
  >(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedSearch(event.target.value);
    setCocktailName(event.target.value);
  };
  const getRandomCocktail = async () => {
    const result: AxiosResponse = await axiosInstance.get("/random.php");

    const { drinks } = result;
    if (drinks) setRandomCocktail(drinks?.[0]);
  };
  const handleSearch = async (cocktailInitialLetter: string) => {
    if (cocktailInitialLetter.length === 1) {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.get(
        `/search.php?f=${cocktailInitialLetter}`
      );
      const { drinks } = result;
      if (drinks) {
        setCurrentCocktails(drinks);
      }
      setIsLoading(false);
    } else {
      toast.error("Please Enter Only One Letter ");
      setCurrentCocktails(null);
    }
  };
  const debouncedSearch = useCallback(
    debounce((value: string) => handleSearch(value), 500),
    []
  );
  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <Fade top duration={2000} distance="40px">
      <Grid container>
        <Grid item sm={12}>
          <CocktailInput value={cocktailName} handleChange={handleChange} />
        </Grid>
        <Grid item sm={12}>
          {isLoading ? (
            <Loader />
          ) : (
            <Fade top duration={2000} distance="40px">
              <CocktailList cocktails={currentCocktails} />
            </Fade>
          )}
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item sm={3} className="Random__Cocktails">
            <Divider variant="fullWidth" />
            {randomCocktail ? (
              <Fade bottom duration={2000} distance="40px">
                <h2>Der zufällige Cocktail</h2>
                <CocktailCard cocktail={randomCocktail} />
              </Fade>
            ) : (
              <Loader />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Home;
