import axios from "axios";

export const baseURL = "https://api.berkormanli.dev/unihelp/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Dinamik olarak token eklemek için bir interceptor ekliyoruz
api.interceptors.request.use(
  (config) => {
    const storedAccount = localStorage.getItem("currentAccount");
    const { authorizedAccount } = storedAccount
      ? JSON.parse(storedAccount)
      : { authorizedAccount: null };

    if (authorizedAccount?.token) {
      config.headers.Authorization = `Bearer ${authorizedAccount.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
