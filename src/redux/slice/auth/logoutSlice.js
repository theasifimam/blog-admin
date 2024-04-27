import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiUrl,
  getToken,
  makeApiRequest,
  notify,
  removeUserSession,
} from "../../../utils/utils";
import { api } from "../../../utils/api";

export const logoutAction = createAsyncThunk("logout", async () => {
  return makeApiRequest({
    url: api.logout,
    method: "POST",
    token: true,
  });
});

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    user: {
      id: "",
      username: "",
      accessToken: "",
      email: "",
      roles: [],
    },
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: (builder) => {
    // logout Request Handling
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logoutAction.fulfilled, (state, { payload }) => {
        state.user = {
          id: "",
          username: "",
          accessToken: "",
          email: "",
        };
        state.success = true;
        state.loading = false;
        removeUserSession();
        notify(payload.message);
      })
      .addCase(logoutAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        console.log("Error : ", payload);
        notify(payload.message, "error");
      });
  },
});

export default logoutSlice.reducer;
