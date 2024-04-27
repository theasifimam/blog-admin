import { createSlice } from "@reduxjs/toolkit";

export const onlineUsersSlice = createSlice({
  name: "onlineUsers",
  initialState: {
    onlineUsers: [],
  },
  reducers: {
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    clearOnlineUsers: (state) => {
      state.onlineUsers = {
        userWithDetail: [],
        Ids: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnlineUsers, clearOnlineUsers } = onlineUsersSlice.actions;

export default onlineUsersSlice.reducer;
