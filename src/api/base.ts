import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./data/store";

// const API_URL = "http://localhost:3000/api/v1"
const API_URL = "https://schollarr-v1-api.onrender.com/api/v1"

export const tagTypes = [
    "user",
    "users",
    "forum",
    "opportunity",
    "complaints",
    "broadcasts"
] as const

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState
        const token = state.auth.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

export const api = createApi({
    baseQuery,
    endpoints: () => ({}),
    tagTypes
})