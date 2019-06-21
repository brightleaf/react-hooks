import { useReducer } from 'react'
import { reducer } from './reducer'

const useAsync = workflow => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  })

  const execute = async (...args) => {
    dispatch({ type: 'loading' })
    try {
      const result = await workflow(...args)

      dispatch({ type: 'success', payload: { data: result } })
    } catch (error) {
      dispatch({ type: 'error', payload: { error } })
    }
  }
  return { ...state, execute }
}

export { useAsync }
export default useAsync
