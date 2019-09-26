/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTitle, useQuery } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useGraphQL example from @brightleaf/react-hooks')
  const { data, loading, error, makeQuery } = useQuery(
    'https://swapiql.herokuapp.com/graphql',
    `{
      person(id: 1) {
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
    }`
  )
  useEffect(() => {
    makeQuery()
  }, [])
  console.log('data', data)
  if (loading) {
    return (
      <div className="App">
        <h2>Loading</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }
  if (error) {
    return <div>error</div>
  }
  if (data && data.length === 0) {
    return (
      <div className="App">
        <h2>Loading</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }

  return (
    <div className="content">
      <h2>SWAPI GraphQL</h2>
      <div>{data.person[0].name}</div>
    </div>
  )
}
