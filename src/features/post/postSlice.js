import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const data = await response.json();
  return data.data.children.map((child) => child.data);
});

export const getPostsFromSearch = createAsyncThunk(
  "posts/getPostsFromSearch",
  async (term) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${term}`
    );
    const data = await response.json();
    return data.data.children.map((child) => child.data);
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    isFailed: false,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.isFailed = false;
    },
    [getPosts.rejected]: (state) => {
      state.isFailed = true;
    },
    [getPostsFromSearch.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsFromSearch.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.isFailed = false;
    },
    [getPostsFromSearch.rejected]: (state) => {
      state.isFailed = true;
    },
  },
});

//export reducer

export default postSlice.reducer;

// export selector

export const postSelector = (state) => state.posts.posts;
