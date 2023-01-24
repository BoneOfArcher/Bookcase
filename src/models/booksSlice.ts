import { Book } from "./books";

export type BooksSliceState = {
    bookName?: string,
    booksList: Partial<Book>[],
    loading: 'idle' | 'pending' | "pending-more" | 'succeeded' | 'failed',
    totalItems?: number,
    book?: Omit<Book, "searchInfo">,
    error?: any
}