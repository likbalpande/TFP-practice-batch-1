import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "auth",
    initialState: {
        name: "",
        email: "",
        password: "",
        isAuthorized: false,
    },
    reducers: {
        setName: (state, actions) => {
            state.name = actions.payload;
        },
        setEmail: (state, actions) => {
            state.email = actions.payload;
        },
        setPassword: (state, actions) => {
            state.password = actions.payload;
        },
        login: (state) => {
            state.isAuthorized = true;
        },
    },
});

export const { setName, setEmail, setPassword, login } = counterSlice.actions;
export default counterSlice.reducer;
