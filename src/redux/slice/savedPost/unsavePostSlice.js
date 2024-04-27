import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const unsavePostAction = createAsyncThunk("unsavePost", async (id) => {
  return await makeApiRequest(`/users/unsave-post/${id}`, {
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

const unsavePostSlice = createSlice({
  name: "unsavePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(unsavePostAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(unsavePostAction.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(unsavePostAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default unsavePostSlice.reducer;
