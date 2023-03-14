import { useState, useEffect } from "react";
import { getArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>
          <p>{article.title}:</p>
          <p>{article.author}</p>
          <p>{article.created_at}:</p>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
