import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../../utils/utils";

export const getFollowersAction = createAsyncThunk(
  "getFollowers",
  async (id) => {
    return await makeApiRequest(`/users/followers/${id}`, {
      method: "GET",
    });
  }
);

const initialState = {
  followers: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getFollowersSlice = createSlice({
  name: "getFollowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollowersAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getFollowersAction.fulfilled, (state, { payload }) => {
        state.followers = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getFollowersAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getFollowersSlice.reducer;
