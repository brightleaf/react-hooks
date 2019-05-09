import React, { useState } from 'react'
import useQuery from '../../src/use-graphql'
export default () => {
  const [id, setId] = useState(1)
  const { data, loading, error } = useQuery(
    'https://swapiql.herokuapp.com/graphql',
    `query Person($id: ID) {
      person(id: $id) {
        id,
        name,
        height,
        hairColor,
        mass,
        eyeColor,
        skinColor,
        birthYear,
        gender,
        homeworld {
          name
        }
      }
    }`,
    { id }
  )
  console.log('data', data)
  if (loading) {
    return <div>Loading Data</div>
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  return (
    <div className="App">
      <h1>{data.person[0].name}</h1>
      <h2>Pick a number</h2>
      <div className="select">
        <button
          className="button mar-r-sm"
          onClick={e => {
            setId(1)
          }}
        >
          1
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            setId(2)
          }}
        >
          2
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            setId(3)
          }}
        >
          3
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            console.log('click')
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
