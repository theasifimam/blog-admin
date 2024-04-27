import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../../utils/utils";

export const getFollowingsAction = createAsyncThunk(
  "getFollowings",
  async (id) => {
    return await makeApiRequest(`/users/followings/${id}`, { method: "GET" });
  }
);

const initialState = {
  followings: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getFollowingsSlice = createSlice({
  name: "getFollowings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollowingsAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getFollowingsAction.fulfilled, (state, { payload }) => {
        state.followings = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getFollowingsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getFollowingsSlice.reducer;
