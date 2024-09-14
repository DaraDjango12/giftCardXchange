import { api, tagTypes } from "@api/base";

export const complaintApi = api.injectEndpoints({
    endpoints: ({ query, mutation }) => ({

        createComplaint: mutation({
            query: (input) => ({
                url: `/complaints`,
                method: "POST",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        getAllComplaints: query({
            query: () => "/complaints",
            providesTags: ['complaints']
        }),

        getComplaint: query({
            query: (id) => `/complaints/${id}`,
            providesTags: ['complaints']
        }),

        updateComplaintStatus: mutation({
            query: ({ input, id }) => ({
                url: `/complaints/${id}/review`,
                method: "PATCH",
                body: input
            }),
            invalidatesTags: tagTypes
        }),

        deleteComplaint: mutation({
            query: (id) => ({
                url: `/complaints/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: tagTypes
        }),
    })
})

export const { useCreateComplaintMutation, useGetAllComplaintsQuery, useGetComplaintQuery, useUpdateComplaintStatusMutation, useDeleteComplaintMutation } = complaintApi