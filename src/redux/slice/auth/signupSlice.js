import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, notify } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const signupAction = createAsyncThunk(
  "signup",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(apiUrl() + api.signup, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const processedData = await response.json();

      if (response.status === (201 || 200)) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: {
      id: "",
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
    // signup Request Handling
    [signupAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    [signupAction.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      notify(payload.message);
      localStorage.setItem("user", JSON.stringify(payload.user));
      console.log(payload);
    },
    [signupAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.user = payload;
      state.message = payload.message;
      state.success = false;
      notify(payload.message, "error");
      console.log("Error : ", payload);
    },
  },
});

export default signupSlice.reducer;
