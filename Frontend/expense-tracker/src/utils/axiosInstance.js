import axios from "axios";
import { BASE_URL } from "./apiPaths";

// Axios API Instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "applicaton/json",
  },
});

// Request Intercepter
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if(accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config
    },
    (error) => {
        return Promise.reject(error);
    },
)


// Response Intercepter
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if(error.res)
    },
)