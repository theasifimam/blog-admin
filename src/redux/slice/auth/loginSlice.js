import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiUrl,
  makeApiRequest,
  notify,
  setUserSession,
} from "../../../utils/utils";
import { api } from "../../../utils/api";

export const loginAction = createAsyncThunk("login", async (data) => {
  return makeApiRequest({ url: api.login, method: "POST", data });
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: (builder) => {
    // login Request Handling

    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.loading = false;
        payload.token && setUserSession(payload.token, payload.user);
        state.success = true;
        state.error = false;
        notify(payload.message);
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload.message;
        state.success = false;
        notify(payload.message, "error");
        console.log("Error : ", payload);
      });
  },
});

export default loginSlice.reducer;
