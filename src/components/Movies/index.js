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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{filter === "accepted" ? "Accepted" : "Submitted"} Movies</h1>
      {filter === "accepted" ? (
        <Container>
          {movies !== undefined
            ? movies.map((movie, index) =>
                movie.frontmatter.accepted ? (
                  <Movie key={index} movie={movie}></Movie>
                ) : (
                  ""
                )
              )
            : ""}
        </Container>
      ) : (
        <Container>
          {movies !== undefined
            ? movies.map((movie, index) => (
                <Movie key={index} movie={movie}></Movie>
              ))
            : ""}
        </Container>
      )}
    </div>
  )
}

export default Movies
