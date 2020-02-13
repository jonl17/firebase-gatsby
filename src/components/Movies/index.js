/** components */
import { Container } from "./Styled"
import Movie from "./Movie"
import AddMovie from "./AddMovie"

/** tech */
import React, { useEffect } from "react"
import { getFirebase } from "../../service/firebase"
import { LOAD_MOVIES } from "../../state/action"
import { useDispatch, useSelector } from "react-redux"

const Movies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")
    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const DB = getFirebase(firebase).firestore()

      let movies = []
      DB.collection("movies")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            movies.push(doc.data())
          })
          dispatch({ type: LOAD_MOVIES, movies: movies })
        })
    })
  }, [])

  let movies = useSelector(state => state.reducer.movies)

  console.log(movies)

  return (
    <>
      <Container>
        <h1>Movies</h1>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie}></Movie>
        ))}
        <AddMovie></AddMovie>
      </Container>
    </>
  )
}

export default Movies
