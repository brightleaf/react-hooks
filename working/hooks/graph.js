import React from 'react'
import useQuery from '../../src/use-graphql'
export default () => {
  console.info('fetch', useQuery)
  const { data, loading, error } = useQuery(
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
  console.log('data', data)
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <main>
      <h1>SWAPI GraphQL</h1>
      <div>{data.person[0].name}</div>
    </main>
  )
}
