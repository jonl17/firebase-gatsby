import { useEffect, useState } from "react"
import { getFirebase } from "../service/firebase"

export const useGetCollectionData = collectionName => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")

    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const DB = getFirebase(firebase).firestore()
      let movies = []

      DB.collection(collectionName)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            movies.push({
              id: doc.id,
              frontmatter: doc.data(),
            })
          })

          setItems(movies)
        })
    })
  }, [collectionName])

  return items
}

export const useGetCollection = collectionName => {
  const [collection, setCollection] = useState(undefined)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")
    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const DB = getFirebase(firebase).firestore()
      setCollection(DB.collection(collectionName))
    })
  }, [collectionName])
  return collection
}
