import axios, { AxiosError, AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://dog.ceo/api",
});

// Defining a custom error handler for all APIs
const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  // Logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// Registering the custom error handler to the "api" axios instance
api.interceptors.response.use(undefined, (error: AxiosError) => {
  return errorHandler(error);
});
