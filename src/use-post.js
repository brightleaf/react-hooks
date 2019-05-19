import { useReducer } from 'react'
import { reducer } from './reducer'

export const usePost = (url = '') => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: false,
  })

  const postData = async data => {
    dispatch({ type: 'get' })
    const resp = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    })
    const result = await resp.json()
    dispatch({ type: 'success', payload: { data: result } })
  }

  return { ...state, postData }
}

export default usePost
