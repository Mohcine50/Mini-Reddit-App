import React, { useEffect, useState } from "react";
import "./feed.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { postSelector } from "../../features/post/postSlice";
import { getPosts } from "../../features/post/postSlice";
import Sidebar from "../sidebar/Sidebar";
function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const feed = "popular";

  useEffect(() => {
    dispatch(getPosts(feed));
  }, [dispatch]);

  return (
    <div className="feed">
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
}

export default Feed;
