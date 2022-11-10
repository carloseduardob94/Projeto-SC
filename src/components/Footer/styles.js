import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #212529;
  background-color: #e7e7e7;

  grid-area: footer;

  > main {
    width: 100%;
    width: 120rem;

    display: flex;
    align-items: center;

    line-height: 1.5;

    margin: 2rem auto 1rem;
  }
`

export const Info = styled.div`
  width: 100%;
  flex: 1;

  img {
    width: 18rem;
    height: 6.4rem;

    padding-bottom: 20px;
  }

  > .adress {
    display: flex;
    align-items: center;
    width: 36rem;

    padding-bottom: 2rem;

    svg {
      font-size: 24px;
      width: 1.25em;
      color: #8fb13a;

      padding-right: 10px;
    }
  }

  > .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36rem;

    padding-bottom: 2rem;

    > svg {
      font-size: 2.4rem;
      min-width: 1.25em;
      color: #8fb13a;

      padding-right: 10px;
    }
  }

  > .private {
    display: flex;
    align-items: center;
    width: 36rem;

    padding-bottom: 2rem;

    > svg {
      font-size: 24px;
      width: 1.25em;
      color: #8fb13a;

      padding-right: 10px;
    }
  }
`
export const Menu = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 2rem;
  padding-top: 5rem;

  > div {
    margin-bottom: 3rem;

    h3 {
      margin-bottom: 1rem;
      font-weight: 700;
    }

    a {
      font-size: 1.4rem;
    }
  }
`
export const Map = styled.div`
  width: 100%;
  width: 40rem;
  flex: 1;
`

export const SocialNetwork = styled.div`
  width: 100%;

  margin-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;

  > div {
    margin-left: 10rem;

    svg {
      width: 38px;
      height: 38px;

      padding: 8px;

      color: #fff;

      background-color: #8fb13a;
      border-radius: 50%;

      margin-right: 5px;
    }
  }
`
