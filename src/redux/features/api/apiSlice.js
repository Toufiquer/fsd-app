"use client";
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "same-origin",
    mode: "cors",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      // const token = getState()?.auth?.accessToken; check token from redux store
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
