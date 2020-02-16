import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = useSelector(state => state.reducer.user)

  useEffect(() => {
    if (user !== undefined) {
      setLoggedIn(true)
    }
  }, [user])

  if (!loggedIn && location.pathname !== `/staff/login`) {
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
