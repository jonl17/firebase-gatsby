import { Container } from "./Styled"

import React from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../../service/auth"
import { useAuth } from "../../hooks"

// TESTS!
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = useSelector(state => state.reducer.user)
  const auth = useAuth()

  useEffect(() => {
    if (user !== undefined) setLoggedIn(true)
    else setLoggedIn(false)
  }, [user])
  console.log("USER AHAHAH:" + user)
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/submit">Submit your movie</Link>
      <Link to="/accepted-movies">Accepted Movies 2020</Link>
      {loggedIn ? (
        <a
          href="/"
          onClick={e => {
            e.preventDefault()
            logout(auth, navigate("."))
          }}
        >
          Logout
        </a>
      ) : (
        <Link to="/staff/login">Staff log in</Link>
      )}
    </Container>
  )
}

export default Navigation
