# Brightleaf React Hooks

Useful React Hooks

* [`useAsync`](#async-hook) - Hook to an async function
* [`useFetch`](#fetch-hook) - Hook to use Fetch
* [`useGet`](#get-hook) - Hook to make a get request
* [`usePost`](#post-hook) - Hook to make an HTTP Post
* [`useClickOutside`](#click-outside-hook) - Hook to handle a click outside an element
* [`useGraphQL`](#graphql-hook) - Hook to make a GraphQL request
* [`useKeypress`](#keypress-hook) - Hook to Keypress
* [`useNes`](#nes-hook) - Hook to connect to Hapijs NES
* [`useWebSockets`](#nes-hook) - Hook to interact with WebSockets
* [`useLocalStorage`](#local-storage-hook) - Hook to local storage
* [`useHover`](#hover-hook) - Hook for binding to hover of an element
* [`useEventListener`](#event-hook) - Hook for binding to an hander to DOM event
* [`useFavicon`](#favicon-hook) - Hook to set a favicon
* [`useTitle`](#title-hook) - Hook to manipulate the page title
* [`useScript`](#script-hook) - Hook to add JavaScript to the page
* [`useStyles`](#style-hook) - Hook to add CSS to the page
* [`useStyleSheet`](#stylesheet-hook) - Hook to add a css file to the page
* [`usePageVisibility`](#pagevisibility-hook) - Hook to use the page visibility api
* [`useOnlineStatus`](#onlinestatus-hook) - Hook to use the online status api

[Examples](https://brightleaf.github.io/react-hooks/examples/#/)

## Async Hook

```jsx
import React, { useEffect } from 'react'
import { useAsync } from '@brightleaf/react-hooks'

export default () => {
  const { loading, error, data, execute } = useAsync(asyncFunction)
  useEffect(() => {
    execute()
  }, [])
  if (loading) {
    return <div>Executing Async Function</div>
  }
  if (error) {
    return <div>Error executing async function</div>
  }
  return <div>{data}</div>
}
```

## Fetch Hook

```javascript
import React, { useState } from 'react'
import { useFetch } from '@brightleaf/react-hooks'
export default () => {
  const [id, setId] = useState(1)

  const { data, error, loading } = useFetch(
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
    </div>
  )
}
```

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

## Keypress Hook

```jsx
import React from 'react'
import { useKeypress } from '@brightleaf/react-hooks'
export default () => {
  const aKeyDown = useKeypress('a')
  return (
    <div className="App content">
      <h2>Key Press?</h2>
      {aKeyDown && (
        <div>
          Yes, the <b>{'"a"'}</b> key is pressed
        </div>
      )}
      {!keyDown && <div>No the <b>{'"a"'}</b> key is not currently pressed</div>}
    </div>
  )
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

## Title Hook

```jsx
import React, { useEffect } from 'react'
import { useTitle } from '@brightleaf/react-hooks'

export default () => {
  useTitle('Brightleaf JS Hooks')

  return <div>The Page</div>
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
      </div>
    </div>
  );
}
```

## Style Hook

```javascript
import React from 'react'
import { useStyles } from '@brightleaf/react-hooks'

export default () => {
   useStyles(`
    html,
    body {
        font-family: 'Open Sans';
    }
    div {
        padding: 5px;
        border: 1px solid #ccc;
    }
  `)

  return (
    <div>
      <div>
        Something
      </div>
    </div>
  );
}
```

## StyleSheet Hook

```javascript
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks'

export default () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')

  return (
    <div>
      ...
    </div>
  );
}
```

## Script Hook

```javascript
import React from 'react'
import { useScript } from '@brightleaf/react-hooks'

export default () => {
  useScript('/js/script.js')

  return (
    <div>
      ...
    </div>
  );
}
```
## PageVisibility Hook

```javascript
import React from 'react'
import { usePageVisibility } from '@brightleaf/react-hooks'

export default () => {
  const { visible, hidden } = usePageVisibility()

  return (
    <div>
      ...
    </div>
  );
}
```

## Favicon Hook

```javascript
import React from 'react'
import { useFavicon } from '@brightleaf/react-hooks'

export default () => {

  const { favicon, setFavicon } = useFavicon('brightleaf.png')

  return (
    <div>
      <button onClick={e => {
        e.preventDefault()
        setFavicon('brightleaf-1.png')
      }}>Change Favicon</button>
    </div>
  );
}
```

## OnlineStatus Hook

```javascript
import React from 'react'
import { useOnlineStatus } from '@brightleaf/react-hooks'

export default () => {
  const { offline, online } = useOnlineStatus()
  return (
    <div>
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
```

## Event Hook

```javascript
import React , { useState } from 'react'
import { useEventListener } from '@brightleaf/react-hooks'

export default () => {
  const [state, setState] = useState(window.scrollY)
  const onScroll = e => {
    setState(window.scrollY)
  }
  useEventListener('scroll', onScroll)
  return (
    <div className="App content">
      <h2>Scroll the page</h2>
      <span
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          background: '#CCCCCC',
        }}
      >
        {state} scroll position
      </span>
      <Home></Home>
    </div>
  )
}
```