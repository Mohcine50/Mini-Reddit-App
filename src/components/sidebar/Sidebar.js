import React, { useEffect } from "react";
import "./sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import { getPosts, postSelector } from "../../features/post/postSlice";

import { useSelector, useDispatch } from "react-redux";
import store from "../../store";

function Sidebar() {
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  const postss = store.getState().posts.posts;

  return (
    <div className="sidebar">
      {postss.map((post, index) => (
        <SidebarOption key={index} index={index + 1} post={post} />
      ))}
    </div>
  );
}

export default Sidebar;
