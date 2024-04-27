import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";

export const searchUserAction = createAsyncThunk(
  "searchUser",
  async ({name, userType, status}) => {
    return await makeApiRequest(`/vac/api/user/search-by-admin-support-reception?searchValue=${name}&status=${status}&userType=${userType}`, 
    {
      token: getToken(),
      apiKey: process.env.REACT_APP_API_KEY,
    });
  }
);

const initialState = {
  user: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

const searchUserSlice = createSlice({
  name: "searchUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUserAction.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.success = false;
      })
      .addCase(searchUserAction.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.loading = false;
        state.success = true;
        state.error = "";
        state.message = payload.message;
        notify(payload.message);
      })
      .addCase(searchUserAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.success = false;
        state.message = error.message;
        notify(error.message, "error");
        console.log("Error: ", error.message);
      });
  },
});

export default searchUserSlice.reducer;
