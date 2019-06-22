import React from 'react'
import { useLocalStorage, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useLocalStorage example from @brightleaf/react-hooks')
  const [count, setCount] = useLocalStorage('count', 1)

  return (
    <div className="App">
      <h2>{count} - Count </h2>
      <button
        onClick={e => {
          setCount(count + 1)
        }}
      >
        + Add
      </button>{' '}
      <button
        onClick={e => {
          setCount(count - 1)
        }}
      >
        - Subtract
      </button>
    </div>
  )
}
