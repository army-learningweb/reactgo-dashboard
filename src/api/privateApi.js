import axios from "axios";

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API_BACK_END,
  timeout: 5000,
});

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url || "";
    const isAuthEndpoint = /\/(?:login|register|logout)(?:[/?]|$)/.test(url);

    if (error.response?.status === 401 && !isAuthEndpoint) {
      localStorage.removeItem("auth_token")
      window.location.replace("/login");
    }

    return Promise.reject(error);
  },
);
