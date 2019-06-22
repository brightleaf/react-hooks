import React from 'react'
import { useLocalStorage, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useLocalStorage example from @brightleaf/react-hooks')
  const [count, setCount] = useLocalStorage('count', 1)

  return (
    <div className="App content">
      <h2>{count} - Count </h2>
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button"
            onClick={e => {
              setCount(count + 1)
            }}
          >
            + Add
          </button>{' '}
        </p>
        <p className="control">
          <button
            className="button"
            onClick={e => {
              setCount(count - 1)
            }}
          >
            - Subtract
          </button>
        </p>
      </div>
    </div>
  )
}
