import React, { useState } from 'react'
import useQuery from '../../src/use-graphql'
export default () => {
  console.info('fetch', useQuery)
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
    return <div>Loading</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <div className="App">
      <h1>{data.person[0].name}</h1>
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
