import { useState, useEffect } from "react";
import { getArticles } from "../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      SetIsLoading(false);
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
              <h2>{article.title}</h2>
              <p>
                By {article.author} on {article.created_at}
              </p>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Articles;
