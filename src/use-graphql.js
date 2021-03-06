import { GraphQLClient } from 'graphql-request'
import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return { ...state, loading: true }
    case 'loading':
      return { ...state, loading: true }
    case 'success':
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      }
    case 'error':
      return {
        ...state,
        data: null,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}

/**
 * @typedef {Object} GraphQL~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 */

/**
 * useGet hook to handle fetching data from a url
 *
 * @param {string} url - The url to be used
 * @param {string|object} query - The query to make
 * @param {object} variables - The variables object to be used with query
 * @returns {...GraphQL~State} - The states and results and the call to make the request
 */
const useGraphQL = function(url, query, variables = {}, options = {}) {
  const client = new GraphQLClient(url, options)
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: false,
  })
  const fetchQuery = async variables => {
    dispatch({ type: 'loading' })
    const resp = await client.request(query, variables)
    const data = resp
    dispatch({ type: 'success', payload: { data } })
  }

  const holder = Object.keys(variables).map(key => variables[key])

  useEffect(() => {
    fetchQuery(variables)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, holder)
  return { ...state }
}

export { useGraphQL }
export default useGraphQL
