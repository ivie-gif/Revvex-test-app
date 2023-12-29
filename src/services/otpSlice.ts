import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "../services/axiosInstance";

export const otpVerifyApi = createApi({
  reducerPath: "otpVerifyApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    verifyUser: builder.mutation({
      query: (data) => ({
        method: "post",
        url: "/verify-otp",
        body: data,
      }),
    }),
  }),
});

export const { useVerifyUserMutation } = otpVerifyApi;
