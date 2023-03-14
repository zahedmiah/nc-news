import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-sglq.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => data.articles);
};
  