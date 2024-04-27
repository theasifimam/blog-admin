import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, getToken, removeUserSession } from "../../../utils/utils";
import { api } from "../../../utils/api";

export const peopleToKnowAction = createAsyncThunk("peopleToKnow", async () => {
  try {
    const response = await fetch(apiUrl() + api.peopleToKnow, {
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

const peopleToKnowSlice = createSlice({
  name: "peopleToKnow",
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
      .addCase(peopleToKnowAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(peopleToKnowAction.fulfilled, (state, action) => {
        state.users = action.payload.data;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
      })
      .addCase(peopleToKnowAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        console.log("Error : ", action.error);
      });
  },
});

export default peopleToKnowSlice.reducer;
