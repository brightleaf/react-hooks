## Event Hooks Example

```jsx
import React, { useState } from 'react'
import { useEventListener, useTitle, useCustomEvent } from '@brightleaf/react-hooks'

 export default () => {

  const [state, setState] = useState(window.scrollY)
  const onScroll = e => {
    setState(window.scrollY)
  }
  const onBrightleafEvent = e => {
    console.info('on brightleaf event', e)
  }
  useEventListener('scroll', onScroll)
  const fireEvent = useCustomEvent('brightleafEvent')
  useEventListener('brightleafEvent', onBrightleafEvent)

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
        onClick={e => {
          fireEvent({
            payload: 'nothing',
          })
        }}
      >
        {state} scroll position
      </span>
      <div>...page content</div>
    </div>
  )
}
```
