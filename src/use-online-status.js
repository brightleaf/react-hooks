import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'online':
      return { online: true, offline: false }
    case 'offline':
      return { online: false, offline: true }
    default:
      return state
  }
}

/**
 * @typedef {Object} Page~Visibility
 * @property {boolean} visible - Indicates whether the page is visible.
 * @property {boolean} hidden - Indicates whether the page is hidden
 */

/**
 * usePageVisibility hook to handle page visibility change
 *
 * @returns {...Page~Visibility} - The state of the page
 */
const useOnlineStatus = workflow => {
  const [state, dispatch] = useReducer(reducer, {
    online: true,
    offline: false,
  })

  window.addEventListener('offline', function(e) {
    dispatch({ type: 'offline' })
  })

  window.addEventListener('online', function(e) {
    dispatch({ type: 'online' })
  })
  return { ...state }
}

export { useOnlineStatus }

export default useOnlineStatus
