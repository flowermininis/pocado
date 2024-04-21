import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import displayUsersService from "./displayUsersService";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  userInfo: userInfo ? userInfo : null,
};

// export const getUser = createAsyncThunk(
//   "users/getUser",
//   async (id, thunkAPI) => {
//     try {
//         return await displayUsersService.getUser(userInfo)
//     }
//   }
// );
