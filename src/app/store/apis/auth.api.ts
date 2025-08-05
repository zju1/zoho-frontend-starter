import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./config/baseQuery";

// This file defines the API for authentication-related data
// It uses a base query that handles re-authentication when necessary

export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
      }),
    }),
  }),
});

export const { useGetMeQuery } = authApi;
