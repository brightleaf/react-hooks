import { useEffect, useState } from 'react'
import Cookies from './utils/cookies'
/**
 * useLocalStorage - Hook to use local storage
 *
 * @param {string} key - The key to save the item in local storage
 * @param {*} initialValue - The initial value
 * @param {boolean} [raw=false] - if the object should be JSON.parsed or not
 * @returns {Array.<{value: object , setFunction: function}>} The value and the setter function
 */
const useCookie = (key, initialValue, options = {}) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = Cookies.get(key)
      if (typeof storedValue !== 'string') {
        Cookies.set(key, JSON.stringify(initialValue), options)
        return initialValue
      } else {
        return JSON.parse(storedValue || 'null')
      }
    } catch {
      // things happen, it's okay
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state)
      Cookies.set(key, serializedState, options)
    } catch {
      // things happen, it's okay
    }
  })
  return [state, setState]
}

export default useCookie
