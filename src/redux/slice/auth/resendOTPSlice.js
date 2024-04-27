import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, notify, removeUserSession } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const resendOTPAction = createAsyncThunk(
  "resendOTP",
  async (username, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(apiUrl() + api.resentOtp + username, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const processedData = await response.json();

      if (response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const resendOTPSlice = createSlice({
  name: "resendOTP",
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
  extraReducers: {
    // resendOTP Request Handling
    [resendOTPAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [resendOTPAction.fulfilled]: (state, { payload }) => {
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
    },
    [resendOTPAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      console.log("Error : ", payload);
      notify(payload.message, "error");
    },
  },
});

export default resendOTPSlice.reducer;
