import React from 'react'
import { useKeypress, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useKeypress example from @brightleaf/react-hooks')
  const aKeyDown = useKeypress('a')
  const bKeyDown = useKeypress('b')
  const cKeyDown = useKeypress('c')
  const keyDown = aKeyDown || bKeyDown || cKeyDown
  return (
    <div className="App content">
      <h2>Key Press? (a, b, c)</h2>
      {keyDown && <div>Yes, a key is pressed</div>}
      {aKeyDown && (
        <div>
          The <b>{'"a"'}</b> key is pressed
        </div>
      )}
      {bKeyDown && (
        <div>
          The <b>{'"b"'}</b> key is pressed
        </div>
      )}
      {cKeyDown && (
        <div>
          The <b>{'"c"'}</b> key is pressed
        </div>
      )}
      {!keyDown && <div>None of the keys are currently pressed</div>}
    </div>
  )
}
