import React, { useEffect, useState } from "react";
import "./post.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { nFormatter, getDate } from "../../util/util";
import { Link } from "react-router-dom";
function Post({ post }) {

 
  return (
    <div className="post">
      <div className="upvots">
        <button id="up">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <span>{nFormatter(post.ups) || <Skeleton />}</span>
        <button id="down">
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
      <div className="details">
        <div className="post-details">
        <Link to={`/post/${post.subreddit}/${post.id}`} style={{ textDecoration: 'none' , color:"#1a1a1b"}}><h3>{post.title || <Skeleton />}</h3></Link>
          
          <span>{post.subreddit_name_prefixed || <Skeleton />}</span>
          <div className="post-img">
            {post.thumbnail != "self" ? (
              post.is_video == true ? (
                <video
                  width="320"
                  height="240"
                  controls
                  aautostart="false"
                  src={post.media.reddit_video.fallback_url}
                />
              ) : (
                <img src={post.url_overridden_by_dest} alt="" />
              )
            ) : (
              <p>{post.selftext}</p> || <Skeleton />
            )}
          </div>
        </div>
        <div className="post-infos">
          <h5>@{post.author || <Skeleton />}</h5>
          <p>{getDate(post.created_utc) || <Skeleton />}</p>
          <div className="post-info-comments">
            <button>
              <i className="fa-solid fa-comment"></i>
            </button>
            <span>{nFormatter(post.num_comments) || <Skeleton />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
