import { Container } from "./Styled"

import React from "react"

const Movie = ({ movie }) => {
  return (
    <Container>
      <p>{movie.name}</p>
      <button className="delete-btn">Delete</button>
    </Container>
  )
}

export default Movie
