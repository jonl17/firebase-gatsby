/** components */
import Movies from "../Movies"

/** tech */
import React from "react"
import { useSelector } from "react-redux"

const SubmittedMovies = () => {
  const user = useSelector(state => state.reducer.user)
  return (
    <>
      <h1>Hello {user !== undefined ? user.email : ""}!</h1>
      <Movies></Movies>
    </>
  )
}

export default SubmittedMovies
