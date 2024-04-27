import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const removeNotificationAction = createAsyncThunk(
  "removeNotification",
  async (data) => {
    return await makeApiRequest(`/notifications/delete`, {
      token: getToken(),
      method: "PUT",
      data,
    });
  }
);

const initialState = {
  notification: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const removeNotificationSlice = createSlice({
  name: "removeNotification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeNotificationAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(removeNotificationAction.fulfilled, (state, { payload }) => {
        state.notification = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(removeNotificationAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
      });
  },
});

export default removeNotificationSlice.reducer;
