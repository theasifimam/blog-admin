export const api = {
  login: "/api/login",
  logout: "/api/logout",
  signup: "/api/users/create-user",
  verifyOtp: "/api/users/verify-otp",
  resentOtp: "/api/resend-otp/",

  // users
  searchUsers: "/api/users/search/",
  peopleToKnow: "/api/people-to-know",

  //   chat
  createGroup: "/api/chats/group",
  deleteChat: "/api/chats/delete/",
  chatById: "/api/chats/get-chat-by-id/",
  chats: "/api/chat",
  messages: "/api/chats/",
  updateChat: "/api/chats/update/",
  batchSaveMessages: "/api/chat/batch-save-messages",
};

export const baseURL = "http://localhost:5000/api";
