import { useEffect, useReducer } from 'react'
import { reducer } from './reducer'

const useGet = url => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
    loading: true,
  })

  const getUrl = async url => {
    dispatch({ type: 'get' })
    const resp = await fetch(url)
    const data = await resp.json()
    dispatch({ type: 'success', payload: { data } })
  }
  useEffect(() => {
    if (url) {
      getUrl(url)
    }
  }, [url])

  return { ...state, getUrl }
}

export { useGet }
export default useGet
