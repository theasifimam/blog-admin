import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const getFollowRequestsAction = createAsyncThunk(
  "getFollowRequests",
  async () => {
    return await makeApiRequest(`/users/follow-requests`, {
      method: "GET",
      token: getToken(),
    });
  }
);

const initialState = {
  requests: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getFollowRequestsSlice = createSlice({
  name: "getFollowRequests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollowRequestsAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getFollowRequestsAction.fulfilled, (state, { payload }) => {
        state.requests = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getFollowRequestsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getFollowRequestsSlice.reducer;
