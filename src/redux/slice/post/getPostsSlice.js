import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const getPostsAction = createAsyncThunk("getPosts", async (page) => {
  return await makeApiRequest(`/posts?pageSize=${10}&page=${page}`, {
    token: getToken(),
  });
});

const initialState = {
  posts: [],
  loading: false,
  error: "",
  message: "",
  success: false,
  totalItems: 0,
};

const getPostsSlice = createSlice({
  name: "getPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getPostsAction.fulfilled, (state, { payload }) => {
        state.posts = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        state.totalItems = payload.totalItems;
      })
      .addCase(getPostsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

const selectPostsSlice = (state) => state.posts;

export const posts = createSelector(selectPostsSlice, (posts) => posts.posts);

export default getPostsSlice.reducer;
