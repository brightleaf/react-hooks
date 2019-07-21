import React from 'react'
import {
  useOnlineStatus,
  useTitle,
  useMediaQuery,
} from '@brightleaf/react-hooks'
export default () => {
  useTitle('useOnlineStatus example from @brightleaf/react-hooks')
  const { offline, online } = useOnlineStatus()
  const { matches } = useMediaQuery('(min-width: 500px)')
  return (
    <div className="App content">
      <h3>
        {offline && 'Connection is offline'}
        {online && 'Connection is online'}
      </h3>
      {matches && (
        <article className="message is-warning">
          <div className="message-body">The page is at least 500px</div>
        </article>
      )}
      {offline && (
        <article className="message is-danger">
          <div className="message-body">Connection is offline </div>
        </article>
      )}
      {online && (
        <article className="message is-success">
          <div className="message-body">Connection is online </div>
        </article>
      )}
    </div>
  )
}
