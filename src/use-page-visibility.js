import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'hidden':
      return { visible: false, hidden: true }
    case 'visible':
      return { visible: true, hidden: false }
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
const usePageVisibility = workflow => {
  const [state, dispatch] = useReducer(reducer, {
    visible: true,
    hidden: false,
  })

  const change = e => {
    dispatch({ type: document.visibilityState })
  }
  document.addEventListener('visibilitychange', change)
  return { ...state }
}

export { usePageVisibility }
export default usePageVisibility
