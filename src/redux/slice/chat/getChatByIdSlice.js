import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const getChatByIdAction = createAsyncThunk("getChatById", (id) => {
  return makeApiRequest(api.chatById + id, {
    token: getToken(),
  });
});

const initialState = {
  chat: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const getChatByIdSlice = createSlice({
  name: "getChatById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChatByIdAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(getChatByIdAction.fulfilled, (state, { payload }) => {
        state.chat = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        // notify(payload.message);
      })
      .addCase(getChatByIdAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        notify(error.message, "error");
        console.log("Error: ", error.message);
      });
  },
});

export default getChatByIdSlice.reducer;
