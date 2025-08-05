import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import { authApi } from "./apis/auth.api";
import { configApi } from "./apis/config.api";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
});
