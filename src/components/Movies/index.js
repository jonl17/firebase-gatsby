/** components */
import { Container } from "./Styled"
import Movie from "./Movie"

/** tech */
import React from "react"
import { useGetCollectionData } from "../../hooks"

const Movies = () => {
  let movies = useGetCollectionData("movies")
  movies.sort((a, b) => {
    return a.frontmatter.created - b.frontmatter.created
  })
  return (
    <>
      <h1>Movies</h1>
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
