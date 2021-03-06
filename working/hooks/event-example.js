import React, { useState } from 'react'
import {
  useFavicon,
  useEventListener,
  useTitle,
  useCustomEvent,
} from '@brightleaf/react-hooks'
import Home from '../app/home'
import Example from './samples/event.md'

export default () => {
  useTitle('useEventListener example from @brightleaf/react-hooks')
  useFavicon('https://brightleaf.github.io/react-hooks/favicon.ico')
  const [state, setState] = useState(window.scrollY)
  const onScroll = e => {
    setState(window.scrollY)
  }
  const onBrightleafEvent = e => {
    console.log('on brightleaf event', e)
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
      <br />
      <div className="content" dangerouslySetInnerHTML={{ __html: Example }} />
      <br />
      <Home></Home>
    </div>
  )
}
