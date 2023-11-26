import styled from 'styled-components'

export const StyledApp = styled.div`
  position: relative;
  z-index: 7;
  column-gap: 90px;
  row-gap: 130px;
  width: 665px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-right: 70px;

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 768px) {
    width: 460px;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 10px;
    padding-right: 32px;
    column-gap: 56px;
    row-gap: 98px;
  }
  @media only screen and (max-width: 600px) {
    width: 224px;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 11px;
  }

`