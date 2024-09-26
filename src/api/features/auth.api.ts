import { AuthResult, LoginInput, User } from "@api/types.api";
import { api, tagTypes } from "../base";

export const authApi = api.injectEndpoints({
    endpoints: ({ query, mutation }) => ({

        login: mutation<AuthResult, LoginInput>({
            query: (credentials) => ({
                url: '/auth/login',
                method: "POST",
                body: { ...credentials }
            }),
            invalidatesTags: tagTypes
        }),

        logout: mutation<unknown, void>({
            queryFn: () => ({ data: { success: true } }),
            invalidatesTags: tagTypes
        }),

        getAuthUser: query<User, void>({
            query: () => "auth/user",
            providesTags: ['user']
        }),

        signup: mutation({
            query: (input) => ({
                url: "/auth/signup",
                method: "POST",
                body: { ...input }
            }),
            invalidatesTags: tagTypes
        }),

        forgotPassword: mutation({
            query: (input) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: { ...input }
            }),
            invalidatesTags: tagTypes
        }),

        resetPassword: mutation({
            query: ({ input, token }) => ({
                url: `/auth/reset-password?token=${token}`,
                method: "PATCH",
                body: { ...input }
            }),
            invalidatesTags: tagTypes
        }),

        changePassword: mutation({
            query: ({ input, userId }) => ({
                url: `/auth/change-password/${userId}`,
                method: "PATCH",
                body: { ...input }
            }),
            invalidatesTags: tagTypes
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useGetAuthUserQuery, useSignupMutation, useForgotPasswordMutation, useResetPasswordMutation, useChangePasswordMutation } = authApi