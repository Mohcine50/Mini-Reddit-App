import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../features/search/searchSlice";
import reddit from "../../imgs/reddit.webp";
import "./header.css";
import { getPostsFromSearch } from "../../features/search/searchSlice";
import { postSelector } from "../../features/post/postSlice";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const posts = useSelector(postSelector);

  const searchHandel = (e) => {
    e.preventDefault();

    dispatch(getPostsFromSearch("term"));
    console.log("search for: ", term);
    console.log(`post for search :${term}`, posts);
  };

  return (
    <div className="header">
      
      <div className="logo">
      <Link to="/" style={{ textDecoration: 'none' , color:"black"}}>
      <div className="link">
        <img src={reddit} />
        <p>
          Mini<span>Reddit</span>
        </p>
        </div>
        </Link>
        
      </div>
      
      <form onSubmit={searchHandel}>
        <div className="search">
          <input
            placeholder="Search Reddit"
            name={term}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submiy" onClick={searchHandel}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
