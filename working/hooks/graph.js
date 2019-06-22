import React from 'react'
import { useGraphQL, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useGraphQL example from @brightleaf/react-hooks')
  const { data, loading, error } = useGraphQL(
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
    }`,
    {}
  )

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
  return (
    <main>
      <h2>SWAPI GraphQL</h2>
      <div>{data.person[0].name}</div>
    </main>
  )
}
