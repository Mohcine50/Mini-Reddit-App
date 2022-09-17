import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./singlePost.css";
import AboutSub from "../../components/about subreddit/AboutSub";
import Comments from "../../components/comments/Comments";
import { useLocation, useParams } from "react-router-dom";

function SinglePost() {

  const params = useParams();
  const id = params.permalink
  const subreddit = params.subreddit;
  const [postData, setPostData] = useState({});
  const permalink = `/r/${subreddit}/comments/${id}/`;
  const fetchPostData = async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const data = await response.json();
    const postData = data[0].data.children[0].data;
    setPostData(postData);
  };

  useEffect(() => {
    fetchPostData(permalink);
  }, []);
  
  return (
    <div className="singlePost">
      <div className="post-holder">
        <Post post={postData} />
        <Comments subreddit={subreddit} postId={id}/>
      </div>
      <AboutSub subreddit={subreddit}/>
    </div>
  );
}

export default SinglePost;
