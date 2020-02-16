import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  grid-gap: 10px;
  padding: 5%;
`
