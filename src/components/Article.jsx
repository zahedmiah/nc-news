import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import ArticleComments from "./ArticleComments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <ul>
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <p>
              By {article.author} on {article.created_at}
            </p>
            <img src={article.article_img_url} alt="Article" />
            <p>{article.body}</p>
          </li>
        </ul>
        <ArticleComments article_id={article_id} />
        </>
      )}
    </div>
  );
};

export default Article;
