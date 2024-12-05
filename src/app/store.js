import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import menuReducer from "../features/menu/menuSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    menuItems: menuReducer,
    users: usersReducer,
  },
});
