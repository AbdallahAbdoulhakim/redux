import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "d8378bba4c22c6445205c6f531abef415302482d938f1da6",
    name: "Dude Lebowski",
    imgUrl: "/profile/team-8.jpg",
  },
  {
    id: "8ec1918c82c1bbf9a9ed0a5467c89b00522f5d266f71ec41",
    name: "Neil Young",
    imgUrl: "/profile/team-6.jpg",
  },
  {
    id: "aa8131e0e3e8afb2c95977fd2e4562ce2e59961d0dfdc262",
    name: "Dave Grey",
    imgUrl: "/profile/team-3.jpg",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
