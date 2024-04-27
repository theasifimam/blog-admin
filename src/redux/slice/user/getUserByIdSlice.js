import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl, getToken, notify, removeUserSession } from "../../../utils/utils";
import { createSelector } from "@reduxjs/toolkit";

export const getUserByIdAction = createAsyncThunk(
  "getUserById",
  async (username) => {
    try {
      const response = await fetch(
        `${apiUrl()}/users/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: `${getToken()}`,
          },
        }
      );

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
  }
);

const getUserByIdSlice = createSlice({
  name: "getUserById",
  initialState: {
    user: {
      email: "",
      fname: "",
      followers: [],
      followings: [],
      lname: "",
      role: "",
      token: "",
      username: "",
      _id: "",
    },
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByIdAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getUserByIdAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        state.message = action.payload.message;
        notify(action.payload.message);
      })
      .addCase(getUserByIdAction.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.success = false;
        notify(action.error.message, "error");
        console.log("Error : ", action.error);
      });
  },
});

const selectUserSlice = (state) => state.userById;

export const selectUser = createSelector(
  selectUserSlice,
  (userById) => userById.user
);

export const selectLoading = createSelector(
  selectUserSlice,
  (userById) => userById.loading
);

export const selectError = createSelector(
  selectUserSlice,
  (userById) => userById.error
);

export default getUserByIdSlice.reducer;
