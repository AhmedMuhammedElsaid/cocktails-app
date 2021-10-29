import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage: FunctionComponent = () => {
  return (
    <Fade top duration={2000} distance="40px">
      <Grid
        className={styles.ErrorPage}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1 className={styles.ErrorPage__message} data-testid="error-msg-testid">
          Ooops!!,Something Went Wrong
        </h1>
        <span className={styles.ErrorPage__BtnHolder} data-testid="go-home-testid">
          <Link rel="preconnect" className={styles.ErrorPage__Btn} to="/">
            Go back to home
          </Link>
        </span>
      </Grid>
    </Fade>
  );
};

export default ErrorPage;
