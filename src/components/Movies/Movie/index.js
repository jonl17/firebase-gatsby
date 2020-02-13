import { Container } from "./Styled"

import React from "react"
import { useGetCollection } from "../../../hooks"

const Movie = ({ movie }) => {
  const movieCollection = useGetCollection("movies")

  const deleteMovie = id => {
    movieCollection
      .doc(id)
      .delete()
      .then(function() {
        console.log("Removed item: " + id)
      })
      .catch(function(error) {
        console.error("Error removing document: ", error)
      })
  }
  console.log(movie)
  return (
    <Container>
      <p>{movie.frontmatter.name}</p>
      <button onClick={() => deleteMovie(movie.id)} className="delete-btn">
        Delete
      </button>
    </Container>
  )
}

export default Movie
