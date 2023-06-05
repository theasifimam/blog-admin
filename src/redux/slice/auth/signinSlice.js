import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, setUserSession } from "../../../utils/utils";

export const signInAction = createAsyncThunk(
  "signIn",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/skm/user/adminSignin`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

const signInSlice = createSlice({
  name: "signIn",
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
    // signIn Request Handling
    [signInAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    [signInAction.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      payload.accessToken && setUserSession(payload.accessToken, payload);
      state.success = true;
      state.error = false;
      notify(payload.message);
      console.log(payload);
    },
    [signInAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.message = payload.message;
      state.success = false;
      notify(payload.message, "error");
      console.log("Error : ", payload);
    },
  },
});

export default signInSlice.reducer;
