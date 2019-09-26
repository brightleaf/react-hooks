import React, { useState } from 'react'
import { useGraphQL, useTitle, useQuery } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useGraphQL example from @brightleaf/react-hooks')

  const { data, loading, error, makeQuery } = useQuery(
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
    { id: 1 }
  )
  console.log('data', data)
  if (data.length === 0 && !loading) {
    makeQuery({ id: 1 })
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  if (!data.person) {
    return (
      <div className="App">
        <h2>Loading It</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }
  return (
    <div className="App content">
      <h2>{data.person[0].name}</h2>
      <h3>Pick a number</h3>
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button mar-r-sm"
            onClick={e => {
              makeQuery({ id: 1 })
            }}
          >
            1
          </button>
        </p>
        <p className="control">
          <button
            type="button"
            className="button mar-r-sm"
            onClick={e => {
              makeQuery({ id: 2 })
            }}
          >
            2
          </button>{' '}
        </p>
        <p className="control">
          <button
            type="button"
            className="button mar-r-sm"
            onClick={e => {
              makeQuery({ id: 3 })
            }}
          >
            3
          </button>{' '}
        </p>
        <p className="control">
          <button
            type="button"
            className="button mar-r-sm"
            onClick={e => {
              console.log('click')
              makeQuery({ id: 4 })
            }}
          >
            4
          </button>{' '}
        </p>
        <p className="control">
          <button
            type="button"
            className="button mar-r-sm"
            onClick={e => {
              makeQuery({ id: 5 })
            }}
          >
            5
          </button>{' '}
        </p>
        <p className="control">
          <button
            type="button"
            className="button mar-r-sm"
            onClick={e => {
              makeQuery({ id: 6 })
            }}
          >
            6
          </button>
        </p>
      </div>
    </div>
  )
}
