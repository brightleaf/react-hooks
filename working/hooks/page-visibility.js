import React from 'react'
import { usePageVisibility, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useKeypress example from @brightleaf/react-hooks')
  const { visible, hidden } = usePageVisibility()
  console.info({ visible, hidden })
  return (
    <div className="App content">
      <h2>
        {visible && 'Visible'}
        {hidden && 'Hidden'}
      </h2>
    </div>
  )
}
