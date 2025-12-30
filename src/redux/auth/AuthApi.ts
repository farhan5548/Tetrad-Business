import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://tetrad-business-709354661385.europe-west2.run.app/api/v1/",
  }),
  endpoints: (build) => ({
    login: build.mutation<
      { result: { access_token: string } },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi;
