/** components */

/** tech */
import React, { useState } from "react"
import { handleLogin, isLoggedIn } from "../../service/auth"
import { navigate } from "gatsby"

// TESTS!
import { useAuth } from "../../hooks"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    setEmail("")
    setPassword("")
    // TESTS
    if (handleLogin(email, password, auth)) {
      navigate("/staff/submitted-movies")
    }
  }

  // if (isLoggedIn()) navigate("/staff/submitted-movies")

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Email
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="text"
          ></input>
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
          ></input>
        </label>
        <input type="submit" value="Log in"></input>
      </form>
    </>
  )
}

export default Login
