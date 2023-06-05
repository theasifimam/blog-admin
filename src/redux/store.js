import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./slice/auth/signinSlice";
import signoutSlice from "./slice/auth/signoutSlice";

export const store = configureStore({
  reducer: {
    signIn: signInSlice,
    signout: signoutSlice,
  },
});
