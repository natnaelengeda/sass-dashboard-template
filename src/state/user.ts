import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  role: "",
  isLoggedIn: false,
}

export const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.role = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export const selectAdmin = (state: { admin: UserState }) => state.admin;
export default adminSlice.reducer;