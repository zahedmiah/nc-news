import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-sglq.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => data.articles);
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => data.article);
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => data.comments)
};

export const voteForArticle = (article_id) => {
  return api
  .patch(`/article/${article_id}`, {
    inc_votes: 1
  })
  .then(({data}) => {
    return data
  })
}