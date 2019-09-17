import { useEffect, useState } from 'react'

/**
 * useKeypressed Hook to return true when key is pressed
 *
 * @param {string} key - The text to be used to set the page title
 * @param {HTMLElement} element - The element to listen on for the keypress
 */
export const useKeypressed = (key, element = window) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const onKeyDownEventHandler = e => {
    if (e.key === key) {
      setKeyPressed(true)
    }
  }
  useEffect(() => {
    element.addEventListener('keydown', onKeyDownEventHandler)

    return () => {
      element.removeEventListener('keydown', onKeyDownEventHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, element])
  return keyPressed
}

export default useKeypressed
