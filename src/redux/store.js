import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice";
import { loadState, saveState } from "./persist";

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        auth: authReducer,
        jobs: jobReducer,
    },
    preloadedState,
});

// save state on every change
store.subscribe(() => {
    saveState(store.getState());
});
