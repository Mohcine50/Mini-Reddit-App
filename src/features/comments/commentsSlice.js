import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (permalink) => {
    const res = await fetch(`https://www.reddit.com${permalink}.json`);
    const data = await res.json();
    return data[1].data.children.map((child) => child.data);
  }
);

/* `https://www.reddit.com/r/${subreddit}/comments/${postId}.json` */
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: false,
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export default commentsSlice.reducer;
export const commentsSelector = (state) => state.comments.comments;
