import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const searchSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isPending: false,
    isFailed: false,
  },
  extraReducers: {
    [getPostsFromSearch.pending]: (state) => {
      state.isPending = true;
    },
    [getPostsFromSearch.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getPostsFromSearch.rejected]: (state) => {
      state.isFailed = true;
    },
  },
});

export const searchSelector = (state) => state.search.posts;
export default searchSlice.reducer;
