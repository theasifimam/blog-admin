import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const getPostByUserAction = createAsyncThunk(
  "getPostByUser",
  async ({ page, username }) => {
    return await makeApiRequest(
      `/posts/user/${username}?pageSize=${10}&page=${page}`,
      {
        token: getToken(),
      }
    );
  }
);

const initialState = {
  posts: [],
  loading: false,
  error: "",
  message: "",
  success: false,
  totalItems: 0,
};

const getPostByUserSlice = createSlice({
  name: "getPostByUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostByUserAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getPostByUserAction.fulfilled, (state, { payload }) => {
        state.posts = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        state.totalItems = payload.totalItems;
      })
      .addCase(getPostByUserAction.rejected, (state, { error }) => {
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

export default getPostByUserSlice.reducer;
