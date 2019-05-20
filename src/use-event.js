import { useEffect } from 'react'
/**
 * useEvent Hook to allow binding to DOM events
 *
 * @param {string} eventName - The name of the event
 * @param {function} eventHandler - The handler function
 * @param {*} [target=window] - The entity to bind the event on
 */
const useEvent = (eventName, eventHandler, target = window) => {
  useEffect(() => {
    target.addEventListener(eventName, eventHandler)

    return () => {
      target.removeEventListener(eventName, eventHandler)
    }
  }, [eventHandler, eventName, target])
}

export default useEvent

export { useEvent }
