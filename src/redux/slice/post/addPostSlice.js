import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";

export const addPostAction = createAsyncThunk("addUser", async (data) => {
  return await makeApiRequest(`/post/create`, {
    token: getToken(),
    method: "POST",
    data,
  });
});

const addPostSlice = createSlice({
  name: "addPost",
  initialState: {
    post: null,
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPostAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(addPostAction.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
        notify(action.payload.message);
      })
      .addCase(addPostAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        notify(action.error.message, "error");
        console.log("Error : ", action.error);
      });
  },
});

export default addPostSlice.reducer;
