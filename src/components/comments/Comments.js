import React, { useEffect } from "react";
import { getComments } from "../../features/comments/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { commentsSelector } from "../../features/comments/commentsSlice";
import Comment from "../comment/Comment";

function Comments({subreddit,postId}) {
  const dispatch = useDispatch();
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    dispatch(
      getComments(
        `/r/${subreddit}/comments/${postId}/`
      )
    );
  }, [dispatch]);

  

  return (
    <div className="comments">
      {comments.map((post, index) => (
          <Comment key={index} post={post} />
        ))}
    </div>
  );
}

export default Comments;
