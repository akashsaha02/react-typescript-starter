import { baseAPI } from "@/store/api/baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [],
    }),
    verifyOTP: build.mutation({
      query: (data) => ({
        url: "/auth/signup-verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [],
    }),

    updatePassword: build.mutation({
      query: (payload) => ({
        url: "/user/update-password",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyOTPMutation,
  useRegisterMutation,
  useUpdatePasswordMutation,
} = userAPI;
