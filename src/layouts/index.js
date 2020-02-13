import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_DEVICE } from "../state/action"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const callBack = () => {
    dispatch({ type: SET_DEVICE, width: window.innerWidth })
  }
  useEffect(() => {
    window.addEventListener("resize", callBack)
    return () => {
      window.removeEventListener("resize", callBack)
    }
  }, [])

  const device = useSelector(state => state.reducer.device)
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>
        {children}
        <p>current device: {device}</p>
      </PageContainer>
    </>
  )
}

export default Layout
