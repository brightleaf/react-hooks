import React from 'react'
import { useGet, useNes } from '@brightleaf/react-hooks'
export default () => {
  const { getUrl } = useGet()

  const { message, error, connecting, connected } = useNes(
    'wss://kev-pi.herokuapp.com'
  )

  if (error) {
    return (
      <div className="App">
        <h1>Error Getting Data</h1>
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
  const messages = message.map((m, index) => (
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
    <div className="App">
      <h1>Messages from Server</h1>
      <div>{messages}</div>
      <div className="pad-t-md mar-t-md">
        <div
          className="button"
          onClick={e => {
            getUrl(`https://kev-pi.herokuapp.com/send`)
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
