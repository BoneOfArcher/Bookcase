import React, { FC } from 'react';

import {
    LinkContainer,
    Image,
    AuthorName,
    BookTitle,
    CategoryTitle,
    InfoWrapper,
} from './styledCardbook';
import { Url } from "../../core/constants";


interface CardbookProps {
    img?: string,
    category?: string,
    title?: string,
    authors?: string[],
    id?: string,
}

export const Cardbook: FC<CardbookProps> = (props) => {
    const {
        id,
        img,
        authors,
        title,
        category,
    } = props
    return (
        <LinkContainer to={`${Url.details}/${id}`}>
            <Image
                src={img}/>
            <InfoWrapper>
                <CategoryTitle>
                    {category}
                </CategoryTitle>
                <BookTitle>
                    {title}
                </BookTitle>
                <AuthorName>
                    {authors?.join(", ")}
                </AuthorName>
            </InfoWrapper>
        </LinkContainer>
    );
};

