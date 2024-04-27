import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";

export const deletePostAction = createAsyncThunk("deletePost", async (id) => {
  return await makeApiRequest(`/posts/${id}`, {
    token: getToken(),
    method: "DELETE",
  });
});

const initialState = {
  chat: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deletePostAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(deletePostAction.fulfilled, (state, { payload }) => {
        state.chat = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        notify(payload.message);
        console.log(payload);
      })
      .addCase(deletePostAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        notify(error.message, "error");
        console.log("Error: ", error.message);
      });
  },
});

export default deletePostSlice.reducer;
