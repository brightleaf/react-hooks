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
/**
 * @typedef {Object} Request~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 * @property {function} makeRequest - The function to call to make the request
 */

/**
 * useGet hook to handle fetching data from a url
 *
 * @param {string} url - The url to request
 * @param {object} config - The config object to be used with the fetch
 * @returns {...Request~State} - The states and results and the call to make the request
 */
const useRequest = (url = '', config = { method: 'GET' }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: false,
  })

  const fullConfig = { ...defaultConfig, ...config }
  /**
   * makeRequest - HTTP Get the url passed in
   * @param {object} config - The fetch configuration
   * @param {string} [urlToGet=url] - the url to get
   */
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
