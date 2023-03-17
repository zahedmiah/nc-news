import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
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
              <Link to={`/articles/${article.article_id}`}>
              <h2>{article.title}</h2>
              </Link>
              <p>Topic: {article.topic}</p>
              <p>By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
              <p>Votes: {article.votes} - Comments: {article.comment_count}</p>
              <img src={article.article_img_url} alt={article.title} />
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Articles;
