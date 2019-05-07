import { useEffect, useReducer } from 'react'
import { reducer } from './reducer'

const useFetch = (url, options) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: true,
  })

  const fetchQuery = async url => {
    dispatch({ type: 'get' })
    const resp = await fetch(url, options)
    const data = await resp.json()
    dispatch({ type: 'success', payload: { data } })
  }
  useEffect(() => {
    fetchQuery(url)
  }, [url])

  return state
}

export default useFetch
