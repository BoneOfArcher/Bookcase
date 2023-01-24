import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice/booksSlice";

const store = configureStore({
    reducer: {
        books: booksSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store