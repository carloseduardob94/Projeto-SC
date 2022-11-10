import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
