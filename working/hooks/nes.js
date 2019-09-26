import React from 'react'
import { useNes, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useNes example from @brightleaf/react-hooks')

  const { messages, error, connecting, connected, client } = useNes(
    'wss://kev-pi.herokuapp.com'
  )

  if (error) {
    return (
      <div className="App">
        <h2>Error Getting Data</h2>
      </div>
    )
  }
  const connectMessage = connecting ? (
    <div className="alert alert-warning">Connecting</div>
  ) : (
    <div className="alert alert-info">Not Connecting</div>
  )
  const connectedMessage = connected ? (
    <div className="alert alert-success">Connected</div>
  ) : (
    <div className="alert alert-danger">Not Connected</div>
  )
  const messageList = messages.map((m, index) => (
    <div
      className={`mar-0 pad-b-xs ${
        index % 2 ? 'text-secondary' : 'text-primary'
      }`}
      key={`key-${index}`}
    >
      {m}
    </div>
  ))
  return (
    <div className="App content">
      <h2>Messages from Server</h2>
      <div>{messageList}</div>
      <div className="pad-t-md mar-t-md">
        <div
          className="button"
          onClick={async e => {
            await client.connect()
            await client.message('The message from the client')
          }}
        >
          Send a message from server
        </div>
      </div>
      <br />
      <div>
        {connectMessage}
        {connectedMessage}
      </div>
    </div>
  )
}
