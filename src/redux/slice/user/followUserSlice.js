import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const followUserAction = createAsyncThunk("followUser", async (id) => {
  return await makeApiRequest(`/users/follow/${id}`, {
    token: getToken(),
    method: "POST",
  });
});

const initialState = {
  user: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const followUserSlice = createSlice({
  name: "followUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(followUserAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(followUserAction.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(followUserAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default followUserSlice.reducer;
