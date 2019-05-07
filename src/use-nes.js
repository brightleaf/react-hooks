import { useEffect, useReducer } from 'react'
import Nes from '@hapi/nes/lib/client'

const reducer = (state, action) => {
  switch (action.type) {
    case 'connecting':
      return { ...state, connecting: true }
    case 'message':
      return {
        ...state,
        message: state.message + action.payload.data,
        error: null,
        loading: false,
      }
    case 'error':
      return {
        ...state,
        message: null,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}
const useNes = (url = 'ws://localhost:4567') => {
  const [state, dispatch] = useReducer(reducer, {
    message: [],
    error: null,
    loading: true,
  })
  var client = new Nes.Client(url)

  const connectClient = async () => {
    dispatch({ type: 'get' })
    await client.connect()
    client.onUpdate = update => {
      dispatch({ type: 'message', payload: { data: update } })
    }

    dispatch({ type: 'connecting', payload: {} })
  }

  useEffect(() => {
    connectClient()
  }, [])
  return { ...state }
}

export { useNes }
export default useNes
