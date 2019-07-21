import React from 'react'
import { useTitle, useMediaQuery } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useMediaQuery example from @brightleaf/react-hooks')
  const { matches } = useMediaQuery('(min-width: 500px)')
  const { matches: maxMatch } = useMediaQuery('(max-width: 900px)')
  return (
    <div className="App content">
      <h3>useMediaQuery Hook</h3>
      {matches && (
        <article className="message is-warning">
          <div className="message-body">
            The page is at least 500px
            <br />
            query:<code>(min-width: 500px)</code>
          </div>
        </article>
      )}
      {maxMatch && (
        <article className="message is-warning">
          <div className="message-body">
            The page no more than 900px
            <br />
            query:<code>(max-width: 900px)</code>
          </div>
        </article>
      )}
    </div>
  )
}
