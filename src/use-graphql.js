import { request } from 'graphql-request'
import { useEffect, useReducer } from 'react'

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

const useGraphQL = function(url, query, variables) {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: true,
  })
  const fetchQuery = async variables => {
    dispatch({ type: 'get' })
    const resp = await request(url, query, variables)
    const data = resp
    dispatch({ type: 'success', payload: { data } })
  }
  const holder = Object.keys(variables).map(key => variables[key])

  useEffect(() => {
    fetchQuery(variables)
  }, holder)
  return { ...state }
}

export { useGraphQL }
export default useGraphQL
