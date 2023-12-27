// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fe-test.revvex.io/api/admin' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query:(data) => ({
        method:'post',
        url: '/register',
        body: data,
      })
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation } = registrationApi