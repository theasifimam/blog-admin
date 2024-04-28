import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/auth/loginSlice";
import logoutSlice from "./slice/auth/logoutSlice";
import signupSlice from "./slice/auth/signupSlice";
import verifyOTPSlice from "./slice/auth/verifyOTPSlice";
import getUsersSlice from "./slice/user/getUsersSlice";
import addPostSlice from "./slice/post/addPostSlice";
import getPostsSlice from "./slice/post/getPostsSlice";
import getChatsSlice from "./slice/chat/getChatsSlice";
import getMessagesSlice from "./slice/chat/getMessagesSlice";
import createGroupSlice from "./slice/chat/createGroupSlice";
import getChatByIdSlice from "./slice/chat/getChatByIdSlice";
import updateChatSlice from "./slice/chat/updateChatSlice";
import deleteChatSlice from "./slice/chat/deleteChatSlice";
import deletePostSlice from "./slice/post/deletePostSlice";
import updatePostSlice from "./slice/post/updatePostSlice";
import getPostByUserSlice from "./slice/post/getPostByUserSlice";
import resendOTPSlice from "./slice/auth/resendOTPSlice";
import privateAccountStatusSlice from "./slice/user/privateAccountStatusSlice";
import onlineUsersSlice from "./slice/chat/onlineUsersSlice";
import themeSlice from "./slice/theme/changeThemeSlice";
import viewUserSlice from "./slice/user/viewUserSlice";

// Define which state slices you want to persist
const selectStateToPersist = (state) => {
  return {
    // Specify the state slices you want to persist here
    login: state.login,
  };
};

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const rootReducer = combineReducers({
  login: loginSlice,
  logout: logoutSlice,
  signup: signupSlice,
  verifyOTP: verifyOTPSlice,
  resendOTP: resendOTPSlice,

  // User
  allUsers: getUsersSlice,
  viewUser: viewUserSlice,
  privateAccountStatus: privateAccountStatusSlice,

  // Post
  addPost: addPostSlice,
  updatePost: updatePostSlice,
  deletePost: deletePostSlice,
  posts: getPostsSlice,
  postsByUser: getPostByUserSlice,

  chats: getChatsSlice,
  messages: getMessagesSlice,
  createGroup: createGroupSlice,
  chatById: getChatByIdSlice,
  updateChat: updateChatSlice,
  deleteGroup: deleteChatSlice,

  onlineUsers: onlineUsersSlice,

  theme: themeSlice,
});

// Load the initial state from localStorage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Configure the store with the rootReducer and persisted state
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    ...persistedState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Subscribe to changes and save the selected state to localStorage
store.subscribe(() => {
  const stateToPersist = selectStateToPersist(store.getState());
  localStorage.setItem("reduxState", JSON.stringify(stateToPersist));
});

export default store;
