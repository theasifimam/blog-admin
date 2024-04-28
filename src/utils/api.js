export const api = {
  login: "/api/login",
  logout: "/api/logout",
  signup: "/api/users/create-user",

  // users
  users: "/api/users",
  viewUser: "/api/users/view/",
  addUser: "/api/users/add-user",
  updateUser: "/api/users/update-user/",
  deleteUser: "/api/users/delete/",
  updateStatus: "/api/users/status/",

  // chat
  createGroup: "/api/chats/group",
  deleteChat: "/api/chats/delete/",
  chatById: "/api/chats/get-chat-by-id/",
  chats: "/api/chat",
  messages: "/api/chats/",
  updateChat: "/api/chats/update/",
  batchSaveMessages: "/api/chat/batch-save-messages",
};

export const baseURL = "http://localhost:5000/api";
