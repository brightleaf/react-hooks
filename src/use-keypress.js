import { useEffect, useState } from 'react'

/**
 * useKeypress Hook to return true when key is pressed
 *
 * @param {string} key - The text to be used to set the page title
 * @param {HTMLElement} element - The element to listen on for the keypress
 */
const useKeypress = (key, element = window) => {
  const [pressed, setPressed] = useState(false)

  const onKeyDownEventHandler = e => {
    if (e.key === key) {
      setPressed(true)
    }
  }
  const onKeyUpEventHandler = e => {
    if (e.key === key) {
      setPressed(false)
    }
  }
  useEffect(() => {
    element.addEventListener('keydown', onKeyDownEventHandler)
    element.addEventListener('keyup', onKeyUpEventHandler)
    return () => {
      element.removeEventListener('keydown', onKeyDownEventHandler)
      element.removeEventListener('keyup', onKeyUpEventHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, element])

  return pressed
}

export default useKeypress

export { useKeypress }
