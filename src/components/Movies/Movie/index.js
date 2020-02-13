import { Container } from "./Styled"

import React from "react"
import { useDispatch } from "react-redux"
import { useGetCollection } from "../../../hooks"
import { PULL_TRIGGER } from "../../../state/action"

const Movie = ({ movie }) => {
  const movieCollection = useGetCollection("movies")
  const dispatch = useDispatch()
  const deleteMovie = id => {
    movieCollection
      .doc(id)
      .delete()
      .then(function() {
        console.log("Removed item: " + id)
        dispatch({ type: PULL_TRIGGER })
      })
      .catch(function(error) {
        console.error("Error removing document: ", error)
      })
  }
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
