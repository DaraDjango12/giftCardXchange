import { createSlice } from "@reduxjs/toolkit";

const AUTH_USER = "schollarr.auth.user"
const TOKEN_KEY = "schollarr.auth.token"


const auth = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem(AUTH_USER)
            ? JSON.parse(localStorage.getItem(AUTH_USER) || "")
            : null,
        token: localStorage.getItem(TOKEN_KEY)
            ? JSON.parse(localStorage.getItem(TOKEN_KEY) || "")
            : null,
    },

    reducers: {
        setCredentials: (state, action) => {
            const { user, access_token } = action.payload;
            localStorage.setItem(AUTH_USER, JSON.stringify(user));
            localStorage.setItem(TOKEN_KEY, JSON.stringify(access_token));
            state.user = user;
            state.token = access_token;
        },
        logout: (state, _action) => {
            console.log(state)
            state.user = null;
            state.token = null;
            localStorage.removeItem(AUTH_USER)
        },
    },
});

export const { setCredentials, logout } = auth.actions;

export const selectCurrentAuthUser = (state: any) => state.auth.user;

export const selectCurrentToken = (state: any) => state.auth.token;

export default auth.reducer;
