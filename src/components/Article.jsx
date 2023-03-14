import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((data) => {
      setArticle(data);
      SetIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <p>
              By {article.author} on {article.created_at}
            </p>
            <img src={article.article_img_url} alt="Article Image" />
            <p>{article.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Article;
