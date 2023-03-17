import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle, voteForArticle } from "../api";
import ArticleComments from "./ArticleComments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  const onClick = () => {
    const hasVoted = localStorage.getItem(`voted-${article.article_id}`);
    if (hasVoted) {
      setIsVotingErr(true);
      return;
    }

    setIsVotingErr(false);
    setUserVote(1);
    voteForArticle(article.article_id)
      .then(() => {
        localStorage.setItem(`voted-${article.article_id}`, true);
      })
      .catch(() => {
        setUserVote(0);
        setIsVotingErr(true);
      });
  };

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
              <p>Votes: {article.votes + userVote}</p>
              <button onClick={onClick}>Vote</button>
              {isVotingErr && <p>Unable to vote!</p>}
            </li>
          </ul>
          <ArticleComments article_id={article_id} />
        </>
      )}
    </div>
  );
};

export default Article;
