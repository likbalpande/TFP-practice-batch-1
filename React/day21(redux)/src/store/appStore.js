// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Example slice

const appStore = configureStore({
    reducer: {
        auth: authReducer, // Add your reducers here
    },
});

export default appStore;
