import React from "react"
import { Router } from "@reach/router"
import SubmittedMovies from "../components/SubmittedMovies"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"

const Staff = () => (
  <Router>
    <PrivateRoute path="/staff/submitted-movies" component={SubmittedMovies} />
    <Login path="/staff/login" />
  </Router>
)
export default Staff
