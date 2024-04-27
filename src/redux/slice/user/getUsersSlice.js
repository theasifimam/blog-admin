import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, getToken, removeUserSession } from "../../../utils/utils";

export const getUsersAction = createAsyncThunk("getUsers", async () => {
  try {
    const response = await fetch(`${apiUrl()}/users`, {
      headers: {
        "Content-Type": "application/json",
        token: `${getToken()}`,
      },
    });

    const processedData = await response.json();

    if (response.status === 401) {
      removeUserSession();
      throw new Error(processedData.message);
    } else if (response.status !== 200) {
      throw new Error(processedData.message);
    }

    return processedData;
  } catch (error) {
    throw error;
  }
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
