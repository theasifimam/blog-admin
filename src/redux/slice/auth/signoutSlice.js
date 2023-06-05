import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/utils";

export const signoutAction = createAsyncThunk(
  "signout",
  async (token, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/user/signout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token}`,
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

const signoutSlice = createSlice({
  name: "signout",
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
    // signout Request Handling
    [signoutAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [signoutAction.fulfilled]: (state, { payload }) => {
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
    [signoutAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      console.log("Error : ", payload);
      notify(payload.message, "error");
    },
  },
});

export default signoutSlice.reducer;
