/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";
const baseUrl = process.env.VITE_APP_API_URL_LOCAL;
export const logInRegistersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getLogInRegisters: builder.query({
      query: () => `/logInRegisters`,
    }),
    getLogInRegister: builder.query({
      query: (email) => `/logInRegisters/${email}`,
    }),
    updateLogInRegister: builder.mutation({
      query: ({ id, data }) => ({
        url: `/logInRegisters/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "getLogInRegisters",
            undefined,
            (draft) => {
              const newValue = draft.map((curr) => {
                if (curr._id === arg.id) {
                  return { ...curr, ...arg.data };
                } else {
                  return curr;
                }
              });
              Object.assign(draft, newValue);
            }
          )
        );
        // update getInstructors query
        const patchResult2 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              draft.push(...arg.data);
              // Object.assign(draft, newValue);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    deleteLogInRegister: builder.mutation({
      query: (id) => ({
        url: `/logInRegisters/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "getLogInRegisters",
            undefined,
            (draft) => {
              const index = draft.findIndex(
                (i) => parseInt(i._id) === parseInt(arg)
              );
              draft.splice(index, 1);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    // for registration
    registerPost: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getLogInRegisters",
                undefined,
                (draft) => {
                  draft.push(query.data);
                }
              )
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
    // for login
    addLogIn: builder.mutation({
      query: (data) => ({
        url: `/logIn`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getLogInRegisters",
                undefined,
                (draft) => {
                  draft.push(query.data);
                }
              )
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
  }),
});
export const {
  useGetLogInRegistersQuery,
  useGetLogInRegisterQuery,
  useUpdateLogInRegisterMutation,
  useDeleteLogInRegisterMutation,
  useRegisterPostMutation,
  useAddLogInMutation,
} = logInRegistersApi;
