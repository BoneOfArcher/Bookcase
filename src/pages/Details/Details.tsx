import React, { useEffect, useMemo } from 'react';
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

import {
    Authors,
    Categories,
    Content,
    Description,
    Image, LoaderWrapper,
    Title,
    Wrapper
} from "./styledDetails";
import { DetailsParams } from "../../models/Url";
import { Loader } from "../../components/UI";
import { Container } from "../../components/UI/styles";
import { fetchBook } from "../../store/booksSlice/booksSlice";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { Url } from "../../core/constants";


export const Details = () => {
    const params = useParams<DetailsParams>()
    const bookId = useMemo(() => params.bookId, [params.bookId])
    const error = useAppSelector(state => state.books.error)
    const dispatch = useAppDispatch()
    const book = useAppSelector(state => state.books.book)
    const loadingStatus = useAppSelector(state => state.books.loading)
    useEffect(() => {
        if (bookId) {
            dispatch(fetchBook({bookId}))
        }
    }, [bookId])

    if (loadingStatus === "failed") {
        console.log(error)
        return <Navigate to={`/${Url.error}`}/>
    }

    if (loadingStatus === "succeeded") {
        return (
            <Container>
                <Wrapper>
                    <Image src={book?.volumeInfo.imageLinks?.thumbnail}/>
                    <Content>
                        <Categories>
                            {book?.volumeInfo.categories}
                        </Categories>
                        <Title>
                            {book?.volumeInfo.title}
                        </Title>
                        <Authors>
                            {book?.volumeInfo.authors?.join(", ")}
                        </Authors>
                        <Description>
                            {book?.volumeInfo.description}
                        </Description>
                    </Content>
                </Wrapper>
            </Container>
        )
    }
    if (loadingStatus === "pending") {
        return (
            <LoaderWrapper>
                <Loader/>
            </LoaderWrapper>
        )
    }
    return null
};

