import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const addNotificationAction = createAsyncThunk(
  "addUser",
  async (data) => {
    return await makeApiRequest(`/notifications`, {
      token: getToken(),
      method: "POST",
      data,
    });
  }
);

const addNotificationSlice = createSlice({
  name: "addNotification",
  initialState: {
    notification: null,
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNotificationAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(addNotificationAction.fulfilled, (state, action) => {
        state.notification = action.payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
      })
      .addCase(addNotificationAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        console.log("Error : ", action.error);
      });
  },
});

export default addNotificationSlice.reducer;
