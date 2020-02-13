import { useEffect, useState } from "react"
import { getFirebase } from "../service/firebase"
import { useSelector } from "react-redux"

export const useGetCollectionData = collectionName => {
  const [items, setItems] = useState([])
  const trigger = useSelector(state => state.reducer.trigger)
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
  }, [collectionName, trigger])

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
