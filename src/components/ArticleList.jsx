import { useState, useEffect } from "react";
import { getArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, SetIsLoading] = useState(true)

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        SetIsLoading(false)
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <p>{article.title}:</p>
              <p>{article.author}</p>
              <p>{article.created_at}:</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )}
  

export default ArticleList
