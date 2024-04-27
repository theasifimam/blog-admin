import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const handleFollowRequestAction = createAsyncThunk(
  "handleFollowRequest",
  async ({ id, action }) => {
    return await makeApiRequest(
      `/users/handle-follow-requests/${id}/${action}`,
      {
        token: getToken(),
        method: "GET",
      }
    );
  }
);

const initialState = {
  request: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const handleFollowRequestSlice = createSlice({
  name: "handleFollowRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFollowRequestAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(handleFollowRequestAction.fulfilled, (state, { payload }) => {
        state.request = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(handleFollowRequestAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default handleFollowRequestSlice.reducer;
