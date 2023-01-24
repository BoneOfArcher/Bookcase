import styled from "styled-components";

import { search, bg } from "../../assets/img/";


const TextColor = "#fff"

export const Container = styled("header")`
  background-image: url(${bg});
  background-size: cover;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled("form")`
  margin: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`
export const Title = styled("h1")`
  color: ${TextColor};
`
export const SearchLabel = styled("label")`
  display: flex;
  align-items: center;
  column-gap: 9px;
  width: 100%;
`
export const SearchInput = styled("input")`
  font-size: 1.3rem;
  width: 100%;
  border-radius: 6px;
  padding: 8px 12px;
`
export const SearchButton = styled("button").attrs({type: "submit"})`
  background-image: url(${search});
  color: red;
  background-color: inherit;
  background-size: cover;
  cursor: pointer;
  border: none;
  height: 17px;
  width: 17px;
  padding: 15px;
`
export const FiltersWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const SubTitle = styled("h4")`
  font-size: 1.3rem;
  color: ${TextColor};
  white-space: nowrap;
`
export const ControlWrapper = styled("label")`
  display: flex;
  align-items: center;
  column-gap: 9px;
`