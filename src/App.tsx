import React, { lazy } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("./pages/Home"));
const CocktailPage = lazy(() => import("./pages/CocktailPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        hideProgressBar
        closeButton={false}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cocktail-details/:id" exact component={CocktailPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
