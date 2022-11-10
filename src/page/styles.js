import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  margin: 0 auto;

  display: grid;
  grid-template-rows: 110px auto 550px;
  grid-template-areas:
    'header'
    'content'
    'footer';
`
