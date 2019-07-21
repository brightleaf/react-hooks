import { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'match':
      return { matches: true }
    case 'nomatch':
      return { matches: false }
    default:
      return state
  }
}

/**
 * @typedef {Object} Match~Media
 * @property {boolean} matches - Indicates whether the media query matches.
 */

/**
 * useMediaQuery hook to handle matching a media query
 *
 * @returns {...Match~Media} - The state matching media
 */
const useMediaQuery = mediaQuery => {
  const [state, dispatch] = useReducer(reducer, {
    matches: false,
  })
  const change = query => {
    console.log('change')
    if (query.matches) {
      dispatch({ type: 'match' })
    } else if (state.matches) {
      dispatch({ type: 'nomatch' })
    }
  }
  const mq = window.matchMedia(mediaQuery)
  mq.addListener(change)
  useEffect(() => {
    change(mq)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQuery])

  return { ...state }
}

export { useMediaQuery }
export default useMediaQuery
