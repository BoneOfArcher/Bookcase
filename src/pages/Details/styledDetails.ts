import styled from "styled-components";


export const Wrapper = styled("div")`
  display: flex;
  column-gap: 52px;
  margin: 10px 10px 0;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    padding: 0 9px;
    justify-content: center;
  }
`
export const Image = styled("img")`
  border: black 1px solid;
  border-radius: 9px;
  object-fit: none;
  height: fit-content;
`
export const Content = styled("div")`
`
export const Categories = styled("h6")`
  margin: 22px 0 0;
`
export const Title = styled("h2")`
  margin: 0;
`
export const Authors = styled("h5")`
  margin: 0;
`
export const Description = styled("p")`
`
export const LoaderWrapper = styled("div")`
  display: flex;
  justify-content: center;
`