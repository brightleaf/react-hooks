import React, { useState } from 'react'
import { useWebSocket, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useWebSocket example from @brightleaf/react-hooks')
  const [messageToSend, setMessageToSend] = useState(
    `This is a test message ${new Date()}`
  )
  const { message, error, connecting, connected, sendMessage } = useWebSocket(
    'wss://wskev.herokuapp.com'
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
    <div className="App content">
      <h2>Messages from Server</h2>
      <br />
      <div>{messages}</div>
      <br />
      <div className="control field">
        <label htmlFor="msg">Message to send</label>
        <input
          type="text"
          id="msg"
          className="input"
          value={messageToSend}
          onChange={e => setMessageToSend(e.target.value)}
        />
      </div>
      <div className="pad-t-md mar-t-md">
        <div
          className="button"
          onClick={e => {
            sendMessage(messageToSend)
            setMessageToSend(`This is another test message ${new Date()}`)
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
