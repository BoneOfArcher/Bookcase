import React, { useMemo } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {
    LoaderWrapper,
    ResultsText,
    Wrapper,
} from "./styledHome";
import { Cardbook } from "../../components";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { Container } from "../../components/UI/styles";
import { fetchMoreBooks } from "../../store/booksSlice/booksSlice";
import { Loader } from "../../components/UI";


export const Home = () => {
    const loadStatus = useAppSelector(state => state.books.loading)
    const books = useAppSelector(state => state.books)
    const dispatch = useAppDispatch()
    const resultMessage = useMemo(() => {
        switch (books.loading) {
            case "idle":
                return "What reading today?"
            case "failed":
                return "Something go wrong"
            case "succeeded": {
                if (books.booksList.length) return `Found ${books.totalItems}`
                return "Not found"
            }
        }
    }, [books.loading])
    if (loadStatus === "idle"
        || loadStatus === "succeeded"
        || loadStatus === "pending-more"
    ) {
        return (
            <Container>
                <ResultsText>
                    {resultMessage}
                </ResultsText>
                <InfiniteScroll
                    next={() => dispatch(fetchMoreBooks())}
                    hasMore={books.booksList.length < (books.totalItems || 0)}
                    loader={<div>load</div>}
                    dataLength={books.booksList.length}
                >
                    <Wrapper>
                        {books.booksList.map(book => (
                            <Cardbook
                                key={book.etag}
                                id={book.id}
                                img={book.volumeInfo?.imageLinks?.thumbnail}
                                authors={book.volumeInfo?.authors}
                                title={book.volumeInfo?.title}
                                category={book.volumeInfo?.categories && book.volumeInfo?.categories[0]}
                            />
                        ))}
                    </Wrapper>
                    {loadStatus === "pending-more"
                        ? <LoaderWrapper>
                            <Loader/>
                        </LoaderWrapper>
                        : null
                    }
                </InfiniteScroll>
            </Container>
        )
    }

    if (loadStatus === "pending") {
        return (
            <Container>
                <LoaderWrapper>
                    <Loader/>
                </LoaderWrapper>
            </Container>
        )
    }

    return null
};

