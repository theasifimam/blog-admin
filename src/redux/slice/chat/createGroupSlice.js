import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, makeApiRequest, notify } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const createGroupAction = createAsyncThunk("createGroup", (data) => {
  return makeApiRequest(api.createGroup, {
    token: getToken(),
    method: "POST",
    data,
  });
});

const createGroupSlice = createSlice({
  name: "createGroup",
  initialState: {
    group: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGroupAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(createGroupAction.fulfilled, (state, action) => {
        state.group = action.payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
        notify(action.payload.message);
      })
      .addCase(createGroupAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        notify(action.error.message, "error");
        console.log("Error : ", action.error);
      });
  },
});

export default createGroupSlice.reducer;
