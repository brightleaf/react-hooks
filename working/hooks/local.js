import React from 'react'
import { useLocalStorage } from '@brightleaf/react-hooks'
export default () => {
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
