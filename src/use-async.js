import { useReducer } from 'react'
import { reducer } from './reducer'

/**
 * @typedef {Object} Async~State
 * @property {Object|array} data - The data returned from the function.
 * @property {boolean} error - Indicates whether the function had an error.
 * @property {boolean} loading - Indicates whether the function is executing
 * @property {function} execute - The function to call to execute the async function
 */

/**
 * useAsync hook to handle executing asynchronous function
 *
 * @param {*} workflow - The async function that will be executed
 * @returns {...Async~State} - The states and results and the call to execute function
 */
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
