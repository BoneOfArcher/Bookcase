import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BooksSliceState } from "../../models/booksSlice";
import { Api } from "../../core/request";
import { BooksRequest, Categories, Orders } from "../../models/request";
import { Book } from "../../models/books";


export interface fetchBooksProps {
    bookName?: string
    orderBy: Orders
    category: Categories | null
    startIndex?: number
}

const fetchBooksHelper: AsyncThunkPayloadCreator<BooksRequest, fetchBooksProps | undefined, { state: BooksSliceState }> =
    async (props, thunkAPI) => {
        let data = {} as BooksRequest
        const state = thunkAPI.getState()
        const bookName = props?.bookName
            ? props.bookName
            : state.bookName
        if (props?.bookName) thunkAPI.dispatch(setBookName(props.bookName))
        const category = props?.category && props?.category !== "all" ? `+subject:${props?.category}` : ""
        await Api.get<BooksRequest>("volumes", {
            params: {
                q: bookName + category,
                startIndex: props?.startIndex,
                maxResults: 30,
                orderBy: props?.orderBy
            }
        })
            .then(res => {
                data = res.data
            })
            .catch(e => {
                throw new Error(e.message)
            })
        return data
    }
export const fetchBooks = createAsyncThunk<BooksRequest, fetchBooksProps>(
    "books/fetchBooks",
    fetchBooksHelper
)
export const fetchMoreBooks = createAsyncThunk<BooksRequest, undefined>(
    "books/fetchMoreBooks",
    fetchBooksHelper
)
export const fetchBook = createAsyncThunk<Omit<Book, "searchInfo">, { bookId: string }>(
    "books/fetchBook",
    async (arg) => {
        let book = {} as Omit<Book, "searchInfo">
        await Api.get<Omit<Book, "searchInfo">>(`volumes/${arg.bookId}`)
            .then(res => {
                console.log(res.data)
                book = res.data
            })
            .catch(e => {
                throw new Error(e.message)
            })
        return book
    }
)

const initialState: BooksSliceState = {
    booksList: [],
    loading: "idle"
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBookName: (state, action: PayloadAction<string>) => {
            state.bookName = action.payload
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchBooks.pending, (state) => {
                    state.loading = "pending"
                })
                .addCase(fetchBooks.fulfilled, (state, action) => {
                    state.loading = "succeeded"
                    state.booksList.length = 0
                    if (action.payload.items?.length) {
                        state.booksList = action.payload.items
                    }
                    state.totalItems = action.payload.totalItems
                })
                .addCase(fetchBooks.rejected, (state, action) => {
                    state.loading = "failed"
                    state.error = action.payload
                })

                .addCase(fetchMoreBooks.pending, (state) => {
                    state.loading = "pending-more"
                })
                .addCase(fetchMoreBooks.fulfilled, (state, action) => {
                    state.loading = "succeeded"
                    if (action.payload.items?.length) {
                        state.booksList = state.booksList.concat(action.payload.items)
                    }
                })
                .addCase(fetchMoreBooks.rejected, (state, action) => {
                    state.loading = "failed"
                    state.error = action.payload
                })

                .addCase(fetchBook.pending, (state => {
                    state.loading = "pending"
                }))
                .addCase(fetchBook.fulfilled, (state, action) => {
                    state.loading = "succeeded"
                    state.book = action.payload
                })
                .addCase(fetchBook.rejected, (state, action) => {
                    state.loading = "failed"
                    state.error = action.payload
                })
        }
})

export const {
    setBookName
} = booksSlice.actions
export default booksSlice