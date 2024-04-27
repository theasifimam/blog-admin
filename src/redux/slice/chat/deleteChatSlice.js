import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const deleteChatAction = createAsyncThunk("deleteChat", (id) => {
  return makeApiRequest(api.deleteChat + id, {
    token: getToken(),
    method: "DELETE",
  });
});

const initialState = {
  chat: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const deleteChatSlice = createSlice({
  name: "deleteChat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteChatAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(deleteChatAction.fulfilled, (state, { payload }) => {
        state.chat = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        notify(payload.message);
        console.log(payload);
      })
      .addCase(deleteChatAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        notify(error.message, "error");
        console.log("Error: ", error.message);
      });
  },
});

export default deleteChatSlice.reducer;
