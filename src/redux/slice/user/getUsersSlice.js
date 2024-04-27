import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const getUsersAction = createAsyncThunk("getUsers", async () => {
  return makeApiRequest({ url: api.users, token: true, method: "GET" });
});

const getUsersSlice = createSlice({
  name: "getUsers",
  initialState: {
    users: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getUsersAction.fulfilled, (state, action) => {
        state.users = action.payload.data;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
      })
      .addCase(getUsersAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        console.log("Error : ", action.error);
      });
  },
});

export default getUsersSlice.reducer;
