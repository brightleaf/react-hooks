import { useCallback, useEffect, useReducer } from 'react'
import { reducer } from './reducer'

const useFetch = (url, options) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: true,
  })

  const fetchQuery = useCallback(
    async url => {
      dispatch({ type: 'get' })
      const resp = await fetch(url, options)
      const data = await resp.json()
      dispatch({ type: 'success', payload: { data } })
    },
    [options]
  )

  useEffect(() => {
    fetchQuery(url)
  }, [fetchQuery, url])

  return state
}

export { useFetch }
export default useFetch
