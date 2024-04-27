import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const getSavedPostsAction = createAsyncThunk(
  "getSavedPosts",
  async (username) => {
    return await makeApiRequest(`/users/saved-posts/${username}`, {
      token: getToken(),
    });
  }
);

const initialState = {
  posts: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getSavedPostsSlice = createSlice({
  name: "getSavedPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSavedPostsAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getSavedPostsAction.fulfilled, (state, { payload }) => {
        state.posts = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getSavedPostsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default getSavedPostsSlice.reducer;
