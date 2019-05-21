import { useEffect, useState } from 'react'
/**
 * useLocalStorage - Hook to use local storage
 *
 * @param {string} key - The key to save the item in local storage
 * @param {*} initialValue - The initial value
 * @param {boolean} [raw=false] - if the object should be JSON.parsed or not
 * @returns {Array.<{value: object , setFunction: function}>} The value and the setter function
 */
const useLocalStorage = (key, initialValue, raw = false) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)
      if (typeof storedValue !== 'string') {
        localStorage.setItem(
          key,
          raw ? String(initialValue) : JSON.stringify(initialValue)
        )
        return initialValue
      } else {
        return raw ? storedValue : JSON.parse(storedValue || 'null')
      }
    } catch {
      // things happen, it's okay
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state)
      localStorage.setItem(key, serializedState)
    } catch {
      // things happen, it's okay
    }
  })
  return [state, setState]
}

export default useLocalStorage
