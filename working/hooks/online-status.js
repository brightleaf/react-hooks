import React from 'react'
import {
  useOnlineStatus,
  useTitle,
  useMediaQuery,
} from '@brightleaf/react-hooks'
export default () => {
  useTitle('useOnlineStatus example from @brightleaf/react-hooks')
  const { offline, online } = useOnlineStatus()

  return (
    <div className="App content">
      <h3>
        {offline && 'Connection is offline'}
        {online && 'Connection is online'}
      </h3>
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
