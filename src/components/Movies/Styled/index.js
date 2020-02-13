import styled from "styled-components"

export const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 10px;
`
