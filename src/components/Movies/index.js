/** components */
import { Container } from "./Styled"

/** tech */
import React, { useState } from "react"
import { useFirebase } from "gatsby-plugin-firebase"

const Movies = () => {
  const [movies, loadMovies] = useState(undefined)

  useFirebase(firebase => {
    firebase
      .database()
      .ref("/movies")
      .once("value")
      .then(snapshot => {
        loadMovies(snapshot.val())
      })
  }, [])

  console.log(movies)
  return <Container>Movies</Container>
}

export default Movies
