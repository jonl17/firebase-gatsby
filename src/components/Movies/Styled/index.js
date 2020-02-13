import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 10px;
  padding: 5%;
`
