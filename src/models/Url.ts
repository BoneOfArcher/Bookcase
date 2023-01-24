import { Url } from "../core/constants";

export type DetailsParams = {
    [key in typeof Url.bookId]: string;
};