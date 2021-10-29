import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// method to redirect the user to error page in case any error happens while fetching the data from the server
export const redirectToErrorPage = () => {
  history.push(`/pagenotfound`);
  history.go(0);
};
export default history;
