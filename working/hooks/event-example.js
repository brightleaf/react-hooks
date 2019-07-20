import React, { useState } from 'react'
import { useFavicon, useEventListener, useTitle } from '@brightleaf/react-hooks'
import Home from '../app/home'

export default () => {
  useTitle('useEventListener example from @brightleaf/react-hooks')
  useFavicon('https://brightleaf.github.io/react-hooks/favicon.ico')
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
