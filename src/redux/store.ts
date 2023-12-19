// Store is like a mini temporary in the middle data base

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;