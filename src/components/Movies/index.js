/** components */
import { Container } from "./Styled"
import Movie from "./Movie"

/** tech */
import React from "react"
import { useGetCollectionData } from "../../hooks"

const Movies = ({ filter }) => {
  let movies = useGetCollectionData("movies")
  movies.sort((a, b) => {
    return a.frontmatter.created - b.frontmatter.created
  })
  return (
    <>
      <h1>Movies</h1>
      {filter ? (
        <Container>
          {movies !== undefined ? (
            movies.map((movie, index) =>
              movie.frontmatter.accepted ? (
                <Movie key={index} movie={movie}></Movie>
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <Container>
          {movies !== undefined ? (
            movies.map((movie, index) => (
              <Movie key={index} movie={movie}></Movie>
            ))
          ) : (
            <></>
          )}
        </Container>
      )}
    </>
  )
}

export default Movies
