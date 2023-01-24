import { Book } from "./books";


export type BooksRequest = {
    items?: Partial<Book>[]
    totalItems: number
}
export type Categories = "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry"
export type Orders = "relevance" | "newest"