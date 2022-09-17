import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SinglePost from "./pages/singlePost/SinglePost";
import Subreddit from "./pages/subreddit/Subreddit"
function App() {
  return (
    <SkeletonTheme baseColor="#F7F9FA" highlightColor="#F7F9FA">
      <Router>
        <div className="app">
          <Header />
          <div className="body">
            <Routes>
              <Route exact path="/" element={<Feed />} />
              <Route exact path="/r/:subreddit" element={<Subreddit />} />
              <Route path="/post/:subreddit/:permalink" element={<SinglePost />} />

            </Routes>
          </div>
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
