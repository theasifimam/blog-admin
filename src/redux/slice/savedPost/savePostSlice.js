import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const savePostAction = createAsyncThunk("savePost", async (id) => {
  return await makeApiRequest(`/users/save-post/${id}`, {
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

const savePostSlice = createSlice({
  name: "savePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(savePostAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(savePostAction.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(savePostAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default savePostSlice.reducer;
