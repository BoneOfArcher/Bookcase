import styled from "styled-components";


export const ResultsText = styled("h4")`
  display: flex;
  justify-content: center;
  margin: 14px 0;
`
export const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 12px;
  margin: 0 10px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const LoaderWrapper = styled("div")`
  display: flex;
  justify-content: center;
`