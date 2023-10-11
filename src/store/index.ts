import { logger, Thunk } from "./middleware";
import { configureStore, Store } from "@reduxjs/toolkit";
import UserReducer from "./slices/user";

const reducer = {
    userReducer: UserReducer
}

export function createStore(initialState?: any): Store<any> {
    const store = configureStore({
        reducer: reducer,
        middleware: [Thunk, logger],
        preloadedState: initialState
    });
    return store;
}