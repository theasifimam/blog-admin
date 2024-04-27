import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const unlikePostAction = createAsyncThunk("unlikePost", async (id) => {
  return await makeApiRequest(`/post/unlike/${id}`, {
    token: getToken(),
    method: "POST",
  });
});

const initialState = {
  post: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const unlikePostSlice = createSlice({
  name: "unlikePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(unlikePostAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(unlikePostAction.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(unlikePostAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default unlikePostSlice.reducer;
