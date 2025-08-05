import { createApi } from "@reduxjs/toolkit/query/react";
import { publicBaseQuery } from "./config/baseQuery";

// This file defines the API for fetching configuration data
// It uses the public base query to avoid authentication requirements

export const configApi = createApi({
  baseQuery: publicBaseQuery,
  reducerPath: "configApi",
  endpoints: (builder) => ({
    getConfig: builder.query({
      query: () => ({
        url: "/config",
      }),
    }),
  }),
});

export const { useGetConfigQuery } = configApi;
