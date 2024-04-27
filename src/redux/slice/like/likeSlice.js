import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const likePostAction = createAsyncThunk("likePost", async (id) => {
  return await makeApiRequest(`/post/like/${id}`, {
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

const likePostSlice = createSlice({
  name: "likePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likePostAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(likePostAction.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(likePostAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default likePostSlice.reducer;
