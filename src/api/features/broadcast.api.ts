import { api, tagTypes } from "@api/base";

export const broadcastApi = api.injectEndpoints({
    endpoints: ({ query, mutation }) => ({

        createBroadcast: mutation({
            query: (input) => ({
                url: `/broadcasts`,
                method: "POST",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        getAllBroadcasts: query({
            query: () => "/broadcasts",
            providesTags: ['broadcasts']
        }),

        getBroadcast: query({
            query: (id) => `/broadcasts/${id}`,
            providesTags: ['broadcasts']
        }),

        deleteBroadcast: mutation({
            query: (id) => ({
                url: `/broadcasts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: tagTypes
        }),

    })
})

export const { useCreateBroadcastMutation, useGetAllBroadcastsQuery, useGetBroadcastQuery, useDeleteBroadcastMutation } = broadcastApi