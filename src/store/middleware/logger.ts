import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(action);
    }
    return next(action);
};