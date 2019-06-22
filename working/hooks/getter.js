import React, { useState } from 'react'
import { useGet, useTitle, useFavicon } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useGet example from @brightleaf/react-hooks')
  useFavicon('https://brightleaf.github.io/react-hooks/brightleaf.ico')
  const [id, setId] = useState(1)

  const { data, error, loading, getUrl } = useGet(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )
  console.info({ data, error, loading, getUrl })

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
        <h2>Loading</h2>
        <span className="loader loader-xl" />
      </div>
    )
  }
  if (data.length === 0) {
    data.push({ name: 'Select Character' })
  }
  return (
    <div className="App">
      <h2>{data[0].name}</h2>
      <h2>Pick a number</h2>
      <div className="select">
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/1')
          }}
        >
          1
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/2')
          }}
        >
          2
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/3')
          }}
        >
          3
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/4')
          }}
        >
          4
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/5')
          }}
        >
          5
        </button>
        <button
          type="button"
          className="button mar-r-sm"
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/6')
          }}
        >
          6
        </button>
      </div>
    </div>
  )
}
