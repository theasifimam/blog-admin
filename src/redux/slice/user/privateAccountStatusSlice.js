import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest } from "../../../utils/utils";

export const privateAccountStatusAction = createAsyncThunk(
  "privateAccountStatus",
  async (id) => {
    return await makeApiRequest(`/users/unfollow/${id}`, {
      token: getToken(),
      method: "POST",
    });
  }
);

const initialState = {
  user: {},
  loading: false,
  error: "",
  message: "",
  success: false,
};

const privateAccountStatusSlice = createSlice({
  name: "privateAccountStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(privateAccountStatusAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(privateAccountStatusAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
      })
      .addCase(privateAccountStatusAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        console.log("Error: ", error.message);
      });
  },
});

export default privateAccountStatusSlice.reducer;
