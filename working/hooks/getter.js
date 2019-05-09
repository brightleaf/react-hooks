import React, { useState } from 'react'
import { useGet } from '@brightleaf/react-hooks'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading, getUrl } = useGet(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )
  if (error) {
    return (
      <div className="App">
        <h1>Error Getting Data</h1>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="App">
        <h1>Loading Data</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>{data[0].name}</h1>
      <h2>Pick a number</h2>
      <div className="select">
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/1')
          }}
        >
          1
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/2')
          }}
        >
          2
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/3')
          }}
        >
          3
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            setId(4)
          }}
        >
          4
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            setId(5)
          }}
        >
          5
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            setId(6)
          }}
        >
          6
        </button>
      </div>
    </div>
  )
}
