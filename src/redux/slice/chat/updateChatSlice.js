import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";

export const updateChatAction = createAsyncThunk(
  "updateChat",
  ({ id, data }) => {
    return makeApiRequest(id, {
      token: getToken(),
      data,
      method: "PUT",
    });
  }
);

const initialState = {
  chat: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const updateChatSlice = createSlice({
  name: "updateChat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateChatAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(updateChatAction.fulfilled, (state, { payload }) => {
        state.chat = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        notify(payload.message);
        console.log(payload);
      })
      .addCase(updateChatAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        notify(error.message, "error");
        console.log("Error: ", error.message);
      });
  },
});

export default updateChatSlice.reducer;
