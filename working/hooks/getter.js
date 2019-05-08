import React, { useState } from 'react'
import { useGet } from '@brightleaf/hooks'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading } = useGet(
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
        <div
          onClick={e => {
            console.log('click')
            setId(1)
          }}
        >
          1
        </div>
        <div
          onClick={e => {
            console.log('click')
            setId(2)
          }}
        >
          2
        </div>
        <div
          onClick={e => {
            console.log('click')
            setId(3)
          }}
        >
          3
        </div>
        <div
          onClick={e => {
            console.log('click')
            setId(4)
          }}
        >
          4
        </div>
        <div
          onClick={e => {
            console.log('click')
            setId(5)
          }}
        >
          5
        </div>
        <div
          onClick={e => {
            console.log('click')
            setId(6)
          }}
        >
          6
        </div>
      </div>
    </div>
  )
}
