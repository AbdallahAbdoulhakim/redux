import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "Home", link: "/" },
  { title: "Add New Post", link: "/post/add" },
];

const menuSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
});

export const getMenuItems = (state) => state.menuItems;

export default menuSlice.reducer;
