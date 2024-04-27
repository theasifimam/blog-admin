import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const unfollowUserAction = createAsyncThunk(
  "unfollowUser",
  async (id) => {
    return await makeApiRequest(`/users/unfollow/${id}`, {
      token: getToken(),
      method: "POST",
    });
  }
);

const initialState = {
  user: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const unfollowUserSlice = createSlice({
  name: "unfollowUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(unfollowUserAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(unfollowUserAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(unfollowUserAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default unfollowUserSlice.reducer;
