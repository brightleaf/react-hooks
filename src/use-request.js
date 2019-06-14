import { useReducer } from 'react'
import { reducer } from './reducer'

const defaultConfig = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}
const useRequest = (url = '', config = { method: 'GET' }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: false,
  })

  const fullConfig = { ...defaultConfig, ...config }

  const makeRequest = async (config = fullConfig, urlToFetch = url) => {
    dispatch({ type: 'get' })

    const resp = await fetch(urlToFetch, config)

    const result = await resp.json()
    dispatch({ type: 'success', payload: { data: result } })
  }
  return { ...state, makeRequest }
}

export { useRequest }
export default useRequest
