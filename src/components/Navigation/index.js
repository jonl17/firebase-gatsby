import { Container } from "./Styled"

import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

const Navigation = ({
  data: {
    allSitePage: { nodes: paths },
  },
}) => {
  return (
    <Container>
      {paths.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.path}
        </Link>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `}
    render={data => <Navigation data={data} {...props}></Navigation>}
  ></StaticQuery>
)
