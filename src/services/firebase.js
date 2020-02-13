const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
}

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(config)
  firebaseInstance = firebase

  return firebase
}

// We don't import any of the firebase packages into the module.
// Instead, we export a function that receives the firebase package
// as an argument. Inside this function, we check that an instance of
// firebase does not previously exist (held in closure by the module).
// If it does exist, return the initialized instance, otherwise proceed
// with initializing firebase and return it. This is the singleton pattern
//  I mentioned before.

// https://kyleshevlin.com/firebase-and-gatsby-together-at-last
