import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_DEVICE, SET_USER } from "../state/action"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"
import Navigation from "../components/Navigation"

import { useAuth } from "../hooks"

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const callBack = () => {
      dispatch({ type: SET_DEVICE, width: window.innerWidth })
    }
    callBack() // on load
    window.addEventListener("resize", callBack)
    return () => {
      window.removeEventListener("resize", callBack)
    }
  }, [dispatch])

  const auth = useAuth()

  useEffect(() => {
    if (auth !== undefined) {
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log("USER LOGGED-IN: " + user.email)
          dispatch({ type: SET_USER, user: user })
        } else {
          console.log("no one is logged in")
          dispatch({ type: SET_USER, user: undefined })
        }
      })
    }
  })

  const device = useSelector(state => state.reducer.device)
  console.log("Detected platform: " + device)
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>
        <Navigation></Navigation>
        {children}
      </PageContainer>
    </>
  )
}

export default Layout
