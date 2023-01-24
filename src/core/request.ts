import axios from "axios";


export const Api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
    params: {
        key: process.env.REACT_API_KEY
    }
})

