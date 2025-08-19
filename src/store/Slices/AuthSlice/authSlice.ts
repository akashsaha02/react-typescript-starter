import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: { role: string } | null;
}

const initialState: AuthState = {
  user: { role: "user" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
