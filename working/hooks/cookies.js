import React, { useState } from 'react'
import { useCookie, useTitle } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useLocalStorage example from @brightleaf/react-hooks')
  const [count, setCount] = useCookie('count', 1)
  const [obj, setObj] = useCookie('obj', {
    title: 'Test Title',
    description: 'Some text',
  })
  const [name, setName] = useCookie('name', '', { expires: 7 })

  const [nameInput, setNameInput] = useState(name)
  console.log(obj)
  return (
    <div className="App content">
      <h2>{count} - Count </h2>
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button"
            onClick={e => {
              setCount(count + 1)
            }}
          >
            + Add
          </button>{' '}
        </p>
        <p className="control">
          <button
            className="button"
            onClick={e => {
              setCount(count - 1)
            }}
          >
            - Subtract
          </button>
        </p>
      </div>
      <h2>{name} - Name </h2>
      <div className="field has-addons">
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder="Your name"
            onChange={e => {
              setNameInput(e.target.value)
            }}
          />
        </p>
        <p className="control">
          <a
            className="button is-info"
            onClick={e => {
              console.log('click')
              setName(nameInput)
              e.preventDefault()
            }}
          >
            Update
          </a>
        </p>
      </div>
      <hr />
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button"
            onClick={e => {
              console.log(obj)
              setObj({
                title: 'Object Title',
                description: 'Some more text',
              })
            }}
          >
            Object
          </button>
        </p>
      </div>
    </div>
  )
}
