import React, { useState } from 'react'
import { useFetch, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useFetch example from @brightleaf/react-hooks')
  const [id, setId] = useState(1)

  const { data, error, loading } = useFetch(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )

  if (error) {
    return (
      <div className="App">
        <h2>Error Fetching Data</h2>
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
    <div className="App content">
      <h2>{data[0].name}</h2>
      <h3>Pick a number</h3>
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button"
            onClick={e => {
              setId(1)
            }}
          >
            1
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button"
            onClick={e => {
              setId(2)
            }}
          >
            2
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button"
            onClick={e => {
              setId(3)
            }}
          >
            3
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button"
            onClick={e => {
              console.log('click')
              setId(4)
            }}
          >
            4
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button"
            onClick={e => {
              setId(5)
            }}
          >
            5
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button"
            onClick={e => {
              setId(6)
            }}
          >
            6
          </button>
        </p>
      </div>
    </div>
  )
}
