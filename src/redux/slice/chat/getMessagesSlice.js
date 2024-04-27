import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const getMessagesAction = createAsyncThunk("getMessages", (chatId) => {
  return makeApiRequest(api.messages + chatId, {
    token: getToken(),
  });
});

const initialState = {
  messages: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getMessagesSlice = createSlice({
  name: "getMessages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessagesAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getMessagesAction.fulfilled, (state, { payload }) => {
        state.messages = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getMessagesAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getMessagesSlice.reducer;
