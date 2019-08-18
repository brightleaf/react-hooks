import { GraphQLClient } from 'graphql-request'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
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

const useMutation = function(url, query, options = {}) {
  const client = new GraphQLClient(url, options)

  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: false,
  })
  const makeQuery = async variables => {
    dispatch({ type: 'get' })
    const resp = await client.request(query, variables)
    const data = resp
    dispatch({ type: 'success', payload: { data } })
  }

  return { ...state, makeQuery }
}

export { useMutation }
export default useMutation
