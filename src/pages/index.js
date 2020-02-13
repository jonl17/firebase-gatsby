import React from "react"
import Movies from "../components/Movies"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const index = () => {
  return (
    <Wrapper>
      <Movies></Movies>
    </Wrapper>
  )
}

export default index
