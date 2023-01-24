import styled from "styled-components";
import { Link } from "react-router-dom";

const SubColor = "#878787"

export const LinkContainer = styled(Link)`
  width: 100%;
  max-width: 230px;
  max-height: 350px;
  padding: 12px 17px;
  background-color: #f3f2f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  color: black;
`
export const Image = styled("img")`
  margin-bottom: 16px;
  max-height: 180px;
  box-shadow: 22px 11px 8px 3px rgba(34, 60, 80, 0.2);
`
export const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  align-self: flex-start;
`
export const CategoryTitle = styled("h4")`
  margin: 0;
  color: ${SubColor};
  text-decoration: underline;
`
export const BookTitle = styled("h4")`
  margin: 0;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const AuthorName = styled("h3")`
  margin: 0;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: ${SubColor};
  overflow: hidden;
  text-overflow: ellipsis;
`
