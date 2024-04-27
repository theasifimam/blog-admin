import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const getChatsAction = createAsyncThunk("getChats", () => {
  return makeApiRequest(api.chats, {
    token: getToken(),
  });
});

const initialState = {
  chats: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getChatsSlice = createSlice({
  name: "getChats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChatsAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getChatsAction.fulfilled, (state, { payload }) => {
        state.chats = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(getChatsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default getChatsSlice.reducer;
