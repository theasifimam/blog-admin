import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const getNotificationAction = createAsyncThunk(
  "getNotification",
  async (id) => {
    return await makeApiRequest(`/notifications`, {
      method: "GET",
      token: getToken(),
    });
  }
);

const initialState = {
  notifications: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getNotificationSlice = createSlice({
  name: "getNotification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotificationAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getNotificationAction.fulfilled, (state, { payload }) => {
        state.notifications = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getNotificationAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getNotificationSlice.reducer;
