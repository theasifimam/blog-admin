import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/auth/loginSlice";
import logoutSlice from "./slice/auth/logoutSlice";
import signupSlice from "./slice/auth/signupSlice";
import verifyOTPSlice from "./slice/auth/verifyOTPSlice";
import getUsersSlice from "./slice/user/getUsersSlice";
import getUserByIdSlice from "./slice/user/getUserByIdSlice";
import followUserSlice from "./slice/user/followUserSlice";
import unfollowUserSlice from "./slice/user/unfollowUserSlice";
import updateProfileSlice from "./slice/user/updateProfileSlice";
import addPostSlice from "./slice/post/addPostSlice";
import getPostsSlice from "./slice/post/getPostsSlice";
import getSavedPostsSlice from "./slice/savedPost/getSavedPostsSlice";
import unsavePostSlice from "./slice/savedPost/unsavePostSlice";
import savePostSlice from "./slice/savedPost/savePostSlice";
import likeSlice from "./slice/like/likeSlice";
import unlikeSlice from "./slice/like/unlikeSlice";
import getFollowersSlice from "./slice/user/getFollowersSlice";
import getFollowingsSlice from "./slice/user/getFollowingsSlice";
import getChatsSlice from "./slice/chat/getChatsSlice";
import getMessagesSlice from "./slice/chat/getMessagesSlice";
import createGroupSlice from "./slice/chat/createGroupSlice";
import getChatByIdSlice from "./slice/chat/getChatByIdSlice";
import updateChatSlice from "./slice/chat/updateChatSlice";
import deleteChatSlice from "./slice/chat/deleteChatSlice";
import notifiySlice from "./slice/notify/notifiySlice";
import addNotificationSlice from "./slice/notify/addNotificationSlice";
import removeNotificationSlice from "./slice/notify/removeNotificationSlice";
import getNotificationSlice from "./slice/notify/getNotificationSlice";
import deletePostSlice from "./slice/post/deletePostSlice";
import updatePostSlice from "./slice/post/updatePostSlice";
import getPostByUserSlice from "./slice/post/getPostByUserSlice";
import resendOTPSlice from "./slice/auth/resendOTPSlice";
import privateAccountStatusSlice from "./slice/user/privateAccountStatusSlice";
import getFollowRequestsSlice from "./slice/user/getFollowRequestsSlice";
import handleFollowRequestSlice from "./slice/user/handleFollowRequestSlice";
import onlineUsersSlice from "./slice/chat/onlineUsersSlice";
import peopleToKnowSlice from "./slice/user/peopleToKnowSlice";
import themeSlice from "./slice/theme/changeThemeSlice";

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
  userById: getUserByIdSlice,
  updateProfile: updateProfileSlice,
  privateAccountStatus: privateAccountStatusSlice,
  peopleToKnow: peopleToKnowSlice,

  // follow
  followUser: followUserSlice,
  unfollowUser: unfollowUserSlice,
  followers: getFollowersSlice,
  followings: getFollowingsSlice,
  followRequests: getFollowRequestsSlice,
  handleFollowRequest: handleFollowRequestSlice,

  // Post
  addPost: addPostSlice,
  updatePost: updatePostSlice,
  deletePost: deletePostSlice,
  posts: getPostsSlice,
  postsByUser: getPostByUserSlice,
  savePost: savePostSlice,
  unsavePost: unsavePostSlice,
  savedPosts: getSavedPostsSlice,
  likePost: likeSlice,
  unlikePost: unlikeSlice,

  chats: getChatsSlice,
  messages: getMessagesSlice,
  createGroup: createGroupSlice,
  chatById: getChatByIdSlice,
  updateChat: updateChatSlice,
  deleteGroup: deleteChatSlice,

  notify: notifiySlice,
  addNotification: addNotificationSlice,
  removeNotification: removeNotificationSlice,
  notifications: getNotificationSlice,
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
