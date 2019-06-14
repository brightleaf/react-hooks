import React, { useState } from 'react'
import { useGet } from '@brightleaf/react-hooks'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading } = useGet(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )
  if (error) {
    return (
      <div className="App">
        <h2>Error Getting Data</h2>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="App">
        <h2>Loading Data</h2>
      </div>
    )
  }
  return (
    <div className="App">
      <h2>{data[0].name}</h2>
      <h2>Pick a number</h2>
      <div className="select">
        <div
          onClick={e => {
            setId(2)
          }}
        >
          2
        </div>
      </div>
    </div>
  )
}
