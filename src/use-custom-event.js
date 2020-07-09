/**
 * useCustomEvent Hook to allow firing custom events
 *
 * @param {string} eventName - The name of the custom event to fire.
 * @returns {function} - The function to call the custom event can accept a payload of data
 */
export const useCustomEvent = eventName => {
  let event
  return payload => {
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      event = new CustomEvent(eventName, { bubbles: true, detail: payload })
    } else {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, payload)
    }
    document.dispatchEvent(event)
  }
}
