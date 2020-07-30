import React, { useState } from 'react'
import { useTitle, useFavicon, useForm } from '@brightleaf/react-hooks'
export default () => {
  useTitle('useForm example from @brightleaf/react-hooks')
  const [formValues, setFormValues] = useState()
  const { addToForm, onSubmit } = useForm()

  return (
    <div className="App content">
      <pre>{formValues}</pre>
      <form
        onSubmit={onSubmit(data => {
          console.info('onsubmit handler', data)
          setFormValues(JSON.stringify(data, null, 2))
        })}
      >
        <fieldset>
          <legend>Form Hook</legend>
          <input
            name="firstName"
            type="text"
            ref={addToForm}
            defaultValue="Kevin"
          />
          <input
            name="lastName"
            type="text"
            ref={addToForm}
            defaultValue="Isom"
          />
          <br />
          <select ref={addToForm} name="dropdown" defaultValue="13">
            <optgroup label="First Group">
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
            </optgroup>
            <optgroup label="Second Group">
              <option value="11">Second First</option>
              <option value="12">Second Second</option>
              <option value="13">Second Third</option>
            </optgroup>
            <optgroup label="Third Group">
              <option value="21">Third First</option>
              <option value="22">Third Second</option>
              <option value="23">Third Third</option>
            </optgroup>
          </select>
          <br />
          <input type="checkbox" name="check" defaultChecked ref={addToForm} />
          <br />
          <div>
            <label>The Radio</label>
            <div>
              <label> First </label>
              <input name="rgroup" type="radio" value="first" ref={addToForm} />
            </div>
            <div>
              <label> Second </label>
              <input
                name="rgroup"
                type="radio"
                value="second"
                ref={addToForm}
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
