import { api, tagTypes } from "@api/base";

export const userApi = api.injectEndpoints({
    endpoints: ({ query, mutation }) => ({

        getAllUsers: query({
            query: () => "/users",
            providesTags: ['users']
        }),

        getUser: query({
            query: (id) => `/users/${id}`,
            providesTags: ['user']
        }),

        updateUserProfile: mutation({
            query: ({ input, userId }) => ({
                url: `/users/${userId}`,
                method: "PATCH",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        updateUserProfilePic: mutation({
            query: ({ input, userId }) => ({
                url: `/users/profile-pic/${userId}`,
                method: "PATCH",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        updateUserStatus: mutation({
            query: ({ input, userId }) => ({
                url: `/users/review-user/${userId}`,
                method: "PATCH",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        sendUserEmail: mutation({
            query: (input) => ({
                url: `/users/send-email`,
                method: "POST",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        sendInvite: mutation({
            query: (input) => ({
                url: `/users/invite`,
                method: "POST",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

    })
})

export const { useGetAllUsersQuery, useGetUserQuery, useUpdateUserProfileMutation, useUpdateUserProfilePicMutation, useUpdateUserStatusMutation, useSendUserEmailMutation, useSendInviteMutation } = userApi