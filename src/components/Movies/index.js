/** components */
import { Container } from "./Styled"

/** tech */
import React, { useEffect, useState } from "react"
import { getFirebase } from "../../services/firebase"

const Movies = () => {
  const [movies, loadMovies] = useState(undefined)
  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDatabase = import("firebase/database")
    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
    })
  }, [])
  console.log(movies)
  return <Container>Movies</Container>
}

export default Movies
