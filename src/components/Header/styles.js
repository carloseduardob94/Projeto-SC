import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 110px;
  grid-area: header;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat', sans-serif;

  > .menuOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    top: 0;
    z-index: 9;

    background: rgba(0, 0, 0, 0.6);
  }

  > .menuOverlayClose {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  padding-top: 2px;

  > ul {
    display: flex;
    list-style: none;

    li {
      border-right: 1px solid #ccc;
      padding: 0 0.5rem;
      text-transform: uppercase;
      font-size: 1.2rem;
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

export const HamburguerMenu = styled.div`
  width: 100%;
  width: 1200px;
  margin-top: 20px;
  padding-left: 20px;

  color: #212529;

  > .menuOpen {
    width: 300px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;

    padding: 30px;

    background-color: #fff;

    button {
      font-size: 24px;
      border: none;
      background: transparent;

      margin-left: 90%;
    }

    .list ul li {
      list-style: none;
      padding: 15px 15px 30px;
      font-size: 1.4rem;

      a {
        color: inherit;
        font-weight: 500;
        text-transform: uppercase;

        &:hover {
          color: #c4000b;
          font-weight: bold;
        }
      }
    }
  }

  > .menuClose {
    display: none;
  }

  > nav {
    display: flex;
    align-items: center;
    font-size: 2.4rem;

    p {
      padding-left: 10px;
    }

    button {
      height: 36px;
      width: 36px;

      background: transparent;
      border: none;

      span {
        display: block;
        width: 30px;
        height: 4px;

        margin-bottom: 3px;
        background-color: #336633;

        border-radius: 3px;
      }
    }
  }
`
