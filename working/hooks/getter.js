import React, { useState } from 'react'
import useGet from '../../src/use-get'
export default () => {
  console.info('fetch view', useGet)

  const [id, setId] = useState(1)
  console.log('id', id)
  const { data, error, loading } = useGet(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )
  console.log({ data, error, loading })
  console.log('render')
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
