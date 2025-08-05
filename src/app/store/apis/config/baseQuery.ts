import { envVars } from "@/config/env-vars";
import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../store.config";
import { clearAuth, setToken } from "../../slices/auth.slice";

export const publicBaseQuery = fetchBaseQuery({
  baseUrl: envVars.BASE_URL,
});

export const authRequiredBaseQuery = fetchBaseQuery({
  baseUrl: envVars.BASE_URL,
  prepareHeaders: (headers, api) => {
    const state = api.getState() as RootState;
    if (state.auth.token) {
      headers.set("Authorization", `Bearer ${state.auth.token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await authRequiredBaseQuery(args, api, extraOptions);
  const authState = (api.getState() as RootState).auth;

  if (result.error && result.error.status === 401) {
    if (!authState.token?.access || !authState.token.refresh) {
      return result;
    }

    const newToken = await authRequiredBaseQuery(
      {
        url: "/user/token/refresh",
        method: "POST",
        body: {
          refresh: authState.token.refresh,
        },
      },
      api,
      extraOptions
    );

    if (newToken.data) {
      api.dispatch(
        setToken({
          refresh: authState.token.refresh,
          access: (
            newToken.data as {
              access: string;
            }
          ).access,
        })
      );

      result = await authRequiredBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearAuth());
      const storageLength = localStorage.length;
      const keyArray = new Array(storageLength).fill(0);
      const storageKeys = keyArray.map((_item, index) =>
        localStorage.key(index)
      );
      storageKeys.forEach((key) => {
        localStorage.removeItem(key || "");
      });
    }
  }

  return result;
};
