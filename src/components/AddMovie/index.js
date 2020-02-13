import React, { useState } from "react"
import { useGetCollection } from "../../hooks"
import { useDispatch } from "react-redux"
import { PULL_TRIGGER } from "../../state/action"

const AddMovie = () => {
  const [name, updateName] = useState("")
  const dispatch = useDispatch()
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
        console.log("Successfully added " + name)
        dispatch({ type: PULL_TRIGGER })
        updateName("")
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
  }

  return (
    <form>
      <input
        value={name}
        onChange={e => updateName(e.target.value)}
        type="text"
      ></input>
      <button onClick={e => handleAdd(e)}>Add</button>
    </form>
  )
}

export default AddMovie
