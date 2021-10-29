import React, { FunctionComponent } from "react";
import styles from "./CocktailInput.module.scss";
import SearchImg from "../../assets/images/searchIcon.png";
interface Props {
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CocktailInput: FunctionComponent<Props> = ({ value, handleChange }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__Head}>
        <div>
          <h2>Cocktail Searcher</h2>
          <p>
            browse through all cocktails based on initial letter <br />
            cocktails with the initial letter will show up immediately{" "}
          </p>
        </div>
      </div>
      <div className={styles.Container__Input__Icon}>
        <input
          value={value}
          onChange={handleChange}
          name="name"
          data-testid="cocktail-input-testid"
          autoComplete="false"
          placeholder="search by initial cocktail letter here...."
          type="search"
        />
        <img src={SearchImg} alt="search icon" />
      </div>
    </div>
  );
};

export default CocktailInput;
