import React, { useState } from 'react'
import useAxios from '../../src/use-axios'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading } = useAxios(
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
