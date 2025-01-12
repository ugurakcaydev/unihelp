import axios from "axios";

export const baseURL = "https://api.berkormanli.dev/unihelp/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
