import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "@/types/user";
import { RootState } from "@/store/store";

type Tstate = {
  user: TUser | null;
  token: string | null;
};

// 🔹 Demo User for testing
const demoUser: TUser = {
  id: "12345",
  email: "demo.user@example.com",
  fullName: "Demo User",
  role: "USER",
  isVerified: true,
  isActive: true,
  isDeleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  deletedAt: null,
  profilePhoto:
    "https://images.unsplash.com/photo-1645833752297-bdd63db489f9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const initialState: Tstate = {
  user: demoUser, // <-- 👈 set demo user here
  token: "demo-token-12345", // fake token for testing
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload || {};
      if (!user || !token) {
        console.error("Invalid payload received:", action.payload);
        return;
      }
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth?.user || demoUser;
export const selectToken = (state: RootState) => state.auth?.token;

const authReducer = authSlice.reducer;
export default authReducer;
