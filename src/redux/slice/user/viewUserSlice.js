import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { makeApiRequest } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const viewUserAction = createAsyncThunk("viewUser", async (id) => {
  return await makeApiRequest({
    url: api.viewUser + id,
    method: "GET",
    token: true,
  });
});

const initialState = {
  user: [],
  loading: false,
  error: "",
  message: "",
  success: false,
  totalItems: 0,
};

const viewUserSlice = createSlice({
  name: "viewUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewUserAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(viewUserAction.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        state.totalItems = payload.totalItems;
      })
      .addCase(viewUserAction.rejected, (state, { error }) => {
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

export default viewUserSlice.reducer;
