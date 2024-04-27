import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, notify, setUserSession } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const verifyOTPAction = createAsyncThunk(
  "verifyOTP",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(apiUrl() + api.verifyOtp, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const processedData = await response.json();

      if (response.status === 201 || response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const verifyOTPSlice = createSlice({
  name: "verifyOTP",
  initialState: {
    user: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: {
    // verifyOTP Request Handling
    [verifyOTPAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    [verifyOTPAction.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      notify(payload.message);
      console.log(payload);
      payload.token && setUserSession(payload.token, payload.user);
    },
    [verifyOTPAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.message = payload.message;
      state.success = false;
      notify(payload.message, "error");
      console.log("Error : ", payload);
    },
  },
});

export default verifyOTPSlice.reducer;
