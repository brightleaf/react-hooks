import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { useClickOutside, useTitle, useFavicon } from '@brightleaf/react-hooks'

function App() {
  useTitle('Brightleaf React Hooks')
  useFavicon('https://brightleaf.github.io/react-hooks/favicon.ico')
  const [menuIsShown, setMenuIsShown] = useState(false)
  const menu = useRef()
  const hideMenu = () => {
    setMenuIsShown(false)
  }

  useClickOutside(menu, hideMenu, menuIsShown)
  const clickHandle = e => {
    e.preventDefault()
    setMenuIsShown(false)
  }
  return (
    <div className="App content">
      <h1 className="title">Bulman and Brightleaf React-Hooks</h1>
      <p className="subtitle">
        DropDown Menu with <strong>Bulma</strong> and{' '}
        <strong>@brightleaf/react-hooks</strong>!
      </p>

      <div
        ref={menu}
        className={classnames('dropdown', { 'is-active': menuIsShown })}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={e => {
              e.preventDefault()
              setMenuIsShown(!menuIsShown)
            }}
          >
            <span>Dropdown button</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item" onClick={clickHandle}>
              Dropdown item
            </a>
            <a className="dropdown-item" onClick={clickHandle}>
              Other dropdown item
            </a>
            <a href="#" className="dropdown-item" onClick={clickHandle}>
              Another dropdown item
            </a>
            <a href="#" className="dropdown-item" onClick={clickHandle}>
              Other dropdown item
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item" onClick={clickHandle}>
              With a divider
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
