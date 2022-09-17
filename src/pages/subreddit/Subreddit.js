import React, { useEffect } from "react";
import Post from "../../components/post/Post";
import "./subreddit.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts, postSelector } from "../../features/post/postSlice";
import AboutSub from "../../components/about subreddit/AboutSub";

function Subreddit() {

  const params = useParams();
  const subreddit = params.subreddit;
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  useEffect(() => {
    dispatch(getPosts(subreddit));
  }, [dispatch]);

  return (<div className="subreddit">
   <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <AboutSub subreddit={subreddit}/>
  </div>);
}

export default Subreddit;
