import axios from "axios";

const api = axios.create({
  baseURL: process.env.TMDB_API,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.status === 404 ||
      error.response.status === 500
    ) {
      if (!/login/.test(window.location.href)) {
        window.location.href = "/login";
      }
    }
  }
);

export default api;
