import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/post/postSlice";
import commentsReducer from "./features/comments/commentsSlice";
import searchReducer from "./features/search/searchSlice";
export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
});
