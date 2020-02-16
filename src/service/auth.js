export const isBrowser = () => typeof window !== "undefined"

export const getUser = auth => {
  return auth.currentUser
}

// gets login info + firebase.auth()
export const handleLogin = (email, password, auth) => {
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code
    let errorMessage = error.message
    console.log(errorCode, errorMessage)
    return false
  })
  console.log("logged in successfully!")
  return true
}

export const isLoggedIn = auth => {
  if (auth.currentUser) {
    return true
  }
  return false
}

export const logout = (auth, callback) => {
  auth
    .signOut()
    .then(function() {
      callback()
    })
    .catch(function(error) {
      console.log(error)
    })
}
