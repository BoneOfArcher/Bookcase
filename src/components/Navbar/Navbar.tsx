import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Select from "react-select";
import { useNavigate } from "react-router";

import {
    Container,
    Title,
    SearchInput,
    FiltersWrapper,
    Wrapper,
    SubTitle,
    ControlWrapper,
    SearchButton,
    SearchLabel,
} from "./styledNavbar";
import { Categories, Orders } from "../../models/request";
import { fetchBooks, fetchBooksProps } from "../../store/booksSlice/booksSlice";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { Url } from "../../core/constants";


interface Option {
    value: string
    label: string
}

const categoriesOptions: Option[] = [
    {value: 'all', label: 'All'},
    {value: 'art', label: 'Strawberry'},
    {value: 'biography', label: 'Biography'},
    {value: 'computers', label: 'Computers'},
    {value: 'history', label: 'History'},
    {value: 'poetry', label: 'Poetry'},
]
const orderOptions = [
    {value: 'relevance', label: 'Relevance'},
    {value: 'newest', label: 'Newest'},
]

export const Navbar = () => {
    const defaultBookName = useAppSelector(state => state.books.bookName)
    const [bookName, setBookName] = useState(defaultBookName)
    const [order, setOrder] = useState<Option | null>(orderOptions[0])
    const [category, setCategory] = useState<Option | null>(categoriesOptions[0])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!bookName) return
        dispatch(fetchBooks({
            bookName: bookName,
            orderBy: order?.value as Orders,
            category: category?.value as Categories,
        }))
    }, [order, category])
    const searchInfo = useMemo<fetchBooksProps | undefined>(() => {
            if (!order?.value
                || !category?.value
            ) return
            return {
                bookName,
                orderBy: order.value as Orders,
                category: category.value as Categories,
            } as fetchBooksProps
        }
        , [bookName, order?.value, category?.value])

    const submitHandler = useCallback((
        event: React.FormEvent<HTMLFormElement>,
        searchInfo: fetchBooksProps | undefined
    ) => {
        event.preventDefault()

        if (!searchInfo) return
        dispatch(fetchBooks(searchInfo))
        navigate(`${Url.home}`)
    }, [bookName])
    return (
        <Container>
            <Wrapper onSubmit={event => submitHandler(event, searchInfo)}>
                <Title>
                    Search for books
                </Title>
                <SearchLabel>
                    <SearchInput
                        type={"text"}
                        name={"book-name"}
                        onChange={(event) => setBookName(event.target.value)}
                    />
                    <SearchButton/>
                </SearchLabel>
                <FiltersWrapper>
                    <ControlWrapper>
                        <SubTitle>
                            Categories
                        </SubTitle>
                        <Select<Option>
                            value={category}
                            onChange={(newValue) => setCategory(newValue)}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            options={categoriesOptions}
                            styles={{
                                container: (base) => ({
                                    ...base,
                                    width: "100%",
                                    minWidth: "140px",
                                    maxWidth: "200px"
                                })
                            }}
                        />
                    </ControlWrapper>
                    <ControlWrapper>
                        <SubTitle>
                            Sorting By
                        </SubTitle>
                        <Select<Option>
                            value={order}
                            onChange={(newValue) => setOrder(newValue)}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            options={orderOptions}
                            styles={{
                                container: (base) => ({
                                    ...base,
                                    width: "100%",
                                    minWidth: "130px",
                                    maxWidth: "200px"
                                })
                            }}
                        />
                    </ControlWrapper>
                </FiltersWrapper>
            </Wrapper>
        </Container>
    );
};

