import { useState } from "react";
import { addComment } from "../api";

const CommentAdder = ({ article_id, setComments }) => {
  const [commentText, setCommentText] = useState("");

  const DEFAULT_USERNAME = "tickle122";

  const handleSubmit = (event) => {
    event.preventDefault();

    const comment = {
      username: DEFAULT_USERNAME,
      body: commentText,
    };

    addComment(article_id, comment)
      .then((newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
        setCommentText("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add a comment:
          <textarea
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentAdder;
