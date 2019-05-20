# Brightleaf React Hooks

Useful React Hooks

* `useFetch` - Hook to use Fetch
* `useGet` - Hook to make a get request
* `usePost` - Hook to make an HTTP Post
* `useClickOutside` - Hook to handle a click outside an element
* `useGraphQL` - Hook to make a GraphQL request
* `useNes` - Hook to connect to Hapijs NES
* `useWebSockets` - Hook to interact with WebSockets
* `useLocalStorage` - Hook to local storage
* `useHover` - Hook for binding to hover of an element

## GraphQL Hook

```javascript
import React, { useState } from 'react'
import { useGraphQL } from '@brightleaf/react-hooks'

export default () => {
  const [id, setId] = useState(1)
  const { data, loading, error } = useGraphQL(
    'https://swapiql.herokuapp.com/graphql',
    `query Person($id: ID) {
      person(id: $id) {
        id,
        name
      }
    }`,
    { id }
  )
  if (loading) {
    return <div>Loading Data</div>
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  return <div>{data.person[0].name}</div>
}
```

## Post Hook

```javascript
import React from 'react'
import { Button, Form, TextBox } from 'react-form-elements'
import { usePost } from '@brightleaf/react-hooks'

export default () => {
  const { data, error, loading, postData } = usePost(
    `https://kev-pi.herokuapp.com/api/echo`
  )

  if (loading) {
    return <div>Loading Data</div>
  }
  if (error) {
    return <div>Error getting graphql data</div>
  }
  return (
    <Form
      name="testForm"
      onSubmit={data => {
        postData(data)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
      <Button>Send</Button>
    </Form>
  )
}

```

## Get Hook

```javascript
import React, { useState } from 'react'
import { useGet } from '@brightleaf/react-hooks'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading, getUrl } = useGet(
    `https://swapiql.herokuapp.com/api/characters/${id}`
  )
  if (error) {
    return (
      <div className="App">
        <h1>Error Getting Data</h1>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="App">
        <h1>Loading Data</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>{data[0].name}</h1>
      <h2>Pick a number</h2>
      <div className="select">
        <div
          onClick={e => {
            getUrl('https://swapiql.herokuapp.com/api/characters/2')
          }}
        >
          2
        </div>
      </div>
    </div>
  )
}
```

## Click Outside Hook

```javascript
import React, { useState, useRef } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks'

export default () => {
  const [menu, setMenu] = useState(false)
  const navMenu= useRef()
  const hideDropDown = () => {
    setMenu(false)
  }
  useClickOutside(navMenu, hideDropDowns, menu)

  return (
    <div className="App">
      <nav ref={navMenu}>
        <div className={`dropdown ${menu ? 'active' : ' '}`}>
          <button
            type="button"
            className="dropdown-trigger"
            onClick={e => {
              setMenu(!menu)
            }}
          >
            Menu
          </button>
          <div>
            ...// items
          </div>
        </div>
      </nav>
      ... // rest of page
    </div>
  )
}
```

# NES Hook



Client hook for connecting to an [NES](https://github.com/hapijs/nes) instance


### Messages

```javascript
import React from 'react'
import { useNes } from '@brightleaf/react-hooks'
export default () => {

  const { message, error, connecting, connected } = useNes(
    'wss://kev-pi.herokuapp.com'
  )

  if (error) {
    return <div><h1>Error</h1></div>
  }
  const connectMessage = connecting ? <div>Connecting</div> : <div>Not Connecting</div>
  const connectedMessage = connected ? <div>Connected</div> : <div>Not Connected</div>

  const messages = message.map((m, index) => <div key={`key-${index}`}>{m}</div>)
  return (
    <div className="App">
      <h1>Messages from Server</h1>
      <div>{messages}</div>
      <div>
        <b>Status Messages</b>
        {connectMessage}
        {connectedMessage}
      </div>
    </div>
  )
}

```

### Subscriptions

Use the client from the hook to create a real time chat room

```javascript
import React, { useState}  from 'react'
import { useNes } from '@brightleaf/react-hooks'
export default () => {
  const { client } = useNes('wss://kev-pi.herokuapp.com')
  const [messages, setMessages] = useState([{
    body: 'welcome',
    user: 'system'
  }])
  const addMessage = (msg) =>  {
    messages.push(msg)
    setMessages([...messages])
  }
  const handler = function(update, flags) {
    addMessage(update)
  }
  // subscribe to a channel
  client.subscribe('/rooms/general', handler);

  const messageList = messages.map(({user, body}, index) => (<div key={`key-${index}`}><b>{user}:</b>{body}</div>))
  return (
    <div>
      {messageList}
    </div>
  )
}
```

## Local Storage Hook

```javascript
import React, { useRef } from 'react'
import { useLocalStorage } from '@brightleaf/react-hooks'

export default () => {
  const [count, setCount] = useLocalStorage(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Hover Hook

```javascript
import React, { useRef } from 'react'
import { useHover } from '@brightleaf/react-hooks'

export default () => {
  const elRef = useRef(null);
  const hovered = useHover(elRef);

  return (
    <div>
      <div className={ hovered ? 'animated' : 'static' }>
        Hover Over Me
      </button>
    </div>
  );
}
```