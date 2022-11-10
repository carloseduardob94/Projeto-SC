import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 11rem;
  grid-area: header;

  font-family: 'Montserrat', sans-serif;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 2px;

  > ul {
    display: flex;
    list-style: none;

    li {
      border-right: 1px solid #ccc;
      padding: 0 0.5rem;
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    svg {
      font-size: 1.7rem;
    }
  }

  > a img {
    width: 16.8rem;
    height: 4.1rem;

    margin-right: 5rem;
    margin-top: 5px;
  }
`
