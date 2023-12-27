import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fe-test.revvex.io/api/admin' }),
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query:(data) => ({
        method:'post',
        url: '/login',
        body: data,
      })
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useUpdateUserMutation } = loginApi