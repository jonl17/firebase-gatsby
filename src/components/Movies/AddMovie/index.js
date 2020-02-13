import React, { useEffect, useState } from "react"
import { getFirebase } from "../../../service/firebase"

const AddMovie = () => {
  const [name, updateName] = useState("")
  const [db, getDB] = useState(undefined)

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDB = import("firebase/firestore")
    Promise.all([lazyApp, lazyDB]).then(([firebase]) => {
      const DB = getFirebase(firebase).firestore()
      getDB(DB)
    })
  }, [])

  const handleAdd = e => {
    e.preventDefault()
    const movie = {
      name: name,
    }
    db.collection("movies").add(movie)
    updateName("")
  }

  return (
    <form>
      <input onChange={e => updateName(e.target.value)} type="text"></input>
      <button onClick={e => handleAdd(e)}>Add</button>
    </form>
  )
}

export default AddMovie
