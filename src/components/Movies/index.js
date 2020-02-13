/** components */
import { Container } from "./Styled"
import Movie from "./Movie"
import AddMovie from "./AddMovie"

/** tech */
import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Movies = ({
  data: {
    allMovies: { nodes },
  },
}) => {
  return (
    <>
      <Container>
        <h1>Movies</h1>
        {/* {movies.map((movie, index) => (
        <Movie key={index} movie={movie}></Movie>
      ))} */}
        <AddMovie></AddMovie>
      </Container>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMovies {
          nodes {
            name
          }
        }
      }
    `}
    render={data => <Movies data={data} {...props}></Movies>}
  ></StaticQuery>
)
