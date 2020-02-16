import { Container } from "./Styled"

import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useGetCollection } from "../../../hooks"
import { PULL_TRIGGER } from "../../../state/action"

const Movie = ({ movie }) => {
  const movieCollection = useGetCollection("movies")

  const dispatch = useDispatch()

  const [accepted, accept] = useState(false)
  useEffect(() => {
    accept(movie.frontmatter.accepted)
  }, [movie.frontmatter.accepted])

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

  const onSelect = (e, id) => {
    accept(e.target.checked)
    let data = movieCollection.doc(id)
    // Set the "capital" field of the city 'DC'
    return data
      .update({
        accepted: e.target.checked,
      })
      .then(function() {
        console.log("Document successfully updated!")
        dispatch({ type: PULL_TRIGGER })
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error)
      })
  }

  return (
    <Container>
      <p>{movie.frontmatter.name}</p>
      <button onClick={() => deleteMovie(movie.id)} className="delete-btn">
        Delete
      </button>
      <div>
        <label htmlFor="accept">Accept</label>
        <input
          onChange={e => onSelect(e, movie.id)}
          name="accept"
          type="checkbox"
          checked={accepted}
        ></input>
      </div>
    </Container>
  )
}

export default Movie
