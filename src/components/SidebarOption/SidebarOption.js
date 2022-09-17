import React, { useEffect, useState } from "react";
import "./sidebaroption.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function SidebarOption({ post, index }) {
  const [subredditIcon, setSubredditIcon] = useState("");

  const getSubredditIcon = async (subredditId) => {
    const response = await fetch(
      `https://www.reddit.com/${subredditId}/about.json`
    );
    const data = await response.json();
    setSubredditIcon(data.data.icon_img);
  };

  useEffect(() => {
    getSubredditIcon(post.subreddit_name_prefixed);
  }, []);

  return (
    <div className="SidebarOption">
      <span>{index}</span>
      <img src={subredditIcon} />
      <Link to={`/r/${post.subreddit}`} style={{ textDecoration: 'none' , color:"#1a1a1b"}}><span>{post.subreddit_name_prefixed || <Skeleton />}</span></Link>
    </div>
  );
}

export default SidebarOption;
