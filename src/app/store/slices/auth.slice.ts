import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthSlice {
  token?: {
    access: string;
    refresh?: string;
  };
  user?: unknown;
}

const initialState: AuthSlice = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers() {
    return {
      setToken: (
        state,
        action: PayloadAction<{ access: string; refresh?: string }>
      ) => {
        state.token = action.payload;
      },
      setUser: (state, action) => {
        state.user = action.payload;
      },
      clearAuth: (state) => {
        state.token = undefined;
        state.user = undefined;
      },
    };
  },
});

export const { clearAuth, setUser, setToken } = authSlice.actions;
