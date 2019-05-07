import { useEffect, useReducer } from 'react'
import axios from 'axios'

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

const useAxios = url => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: true,
  })

  const fetchQuery = async url => {
    dispatch({ type: 'get' })
    const resp = await axios.get(url)
    const data = resp.data
    dispatch({ type: 'success', payload: { data } })
  }
  useEffect(() => {
    fetchQuery(url)
  }, [])

  return state
}

export { useAxios }
export default useAxios
