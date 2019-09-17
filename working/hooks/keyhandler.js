/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useKeypressed, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useKeypress example from @brightleaf/react-hooks')

  const aPressed = useKeypressed('a')
  const bPressed = useKeypressed('b')
  const cPressed = useKeypressed('c')

  return (
    <div className="App content">
      <h2>Key Press? (a, b, c)</h2>
      {aPressed && (
        <div>
          The <b>{'"a"'}</b> key has been pressed
        </div>
      )}
      {bPressed && (
        <div>
          The <b>{'"b"'}</b> key has been pressed
        </div>
      )}
      {cPressed && (
        <div>
          The <b>{'"c"'}</b> key has been pressed
        </div>
      )}
    </div>
  )
}
