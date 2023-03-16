import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";

const ArticleComments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    SetIsLoading(true)
    getArticleComments(article_id).then((data) => {
      console.log("data:", data);
      setComments(data);
      SetIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <p>By {comment.author} on {comment.created_at}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleComments;
