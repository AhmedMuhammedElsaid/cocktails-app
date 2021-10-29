import axios from "axios";
import { redirectToErrorPage } from './history';
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  // setting the default uri for this instance
  baseURL: process.env.REACT_APP_BASE_URI,
});

// setting language  configuration on every single request we send to the BE
axiosInstance.interceptors.request.use(
  (request: any) => {
    return {
      ...request,
      headers: {
        ...request.headers,
        // setting the header lang german "de"
        "Accept-Language": "de",
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    switch (error?.response?.status) {
      case 400:
        return {
          data: null,
          hasError: true,
          error: [error.response.data],
        };
      case 401:
        toast.error("Unauthorized Call Access");
        break;
      case 404:
        toast.error("404 Not Found");
        break;
      case 500:
        toast.error("Server Is Down");
        break;
    }
    redirectToErrorPage()
    return Promise.reject(error);
  }
);
export default axiosInstance;
