import React, { useState } from "react"
import { useGetCollection } from "../../../hooks"

const AddMovie = () => {
  const [name, updateName] = useState("")

  const movieCollection = useGetCollection("movies")

  const handleAdd = e => {
    e.preventDefault()
    const movie = {
      name: name,
      created: new Date().getTime(),
    }
    movieCollection
      .add(movie)
      .then(function() {
        console.log("Added item: " + name)
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
  }

  return (
    <form>
      <input onChange={e => updateName(e.target.value)} type="text"></input>
      <button onClick={e => handleAdd(e)}>Add</button>
    </form>
  )
}

export default AddMovie
