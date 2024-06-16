import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: API_KEY,
    limit: 1,
    rating: "g",
    lang: "en",
  },
});

export default apiClient;
