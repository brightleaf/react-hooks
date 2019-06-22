import { useRef, useEffect } from 'react'
/**
 * useEvent Hook to allow binding to DOM events
 *
 * @param {string} eventName - The name of the event
 * @param {function} eventHandler - The handler function
 * @param {*} [target=window] - The entity to bind the event on
 */
const useEventListener = (eventName, handler, target = window) => {
  const refHandler = useRef()

  useEffect(() => {
    refHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = target && target.addEventListener
    if (!isSupported) return

    const eventListener = event => refHandler.current(event)
    target.addEventListener(eventName, eventListener)
    return () => {
      target.removeEventListener(eventName, eventListener)
    }
  }, [eventName, target])
}

export default useEventListener
