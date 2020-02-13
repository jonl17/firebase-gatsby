/** components */
import { Container } from "./Styled"
import Movie from "./Movie"
import AddMovie from "./AddMovie"

/** tech */
import React from "react"
import { useGetCollectionData } from "../../hooks"

const Movies = () => {
  const movies = useGetCollectionData("movies")
  return (
    <>
      <h1>Movies</h1>
      <AddMovie></AddMovie>
      <Container>
        {movies !== undefined ? (
          movies.map((movie, index) => (
            <Movie key={index} movie={movie}></Movie>
          ))
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}

export default Movies
