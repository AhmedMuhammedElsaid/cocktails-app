import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export const customRender = (component: JSX.Element): RenderResult => {
  return {
    ...render(<Router>{component}</Router>),
  };
};
