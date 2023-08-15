/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_APP_API_URL_LOCAL,
    credentials: "same-origin",
    mode: "cors",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});