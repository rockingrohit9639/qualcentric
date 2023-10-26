import { GetUserQueryResult, PaginationOptions } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<GetUserQueryResult, PaginationOptions>({
      query: (options) => `/?page=${options.page}&results=${options.results}`,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
