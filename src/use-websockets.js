import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'connecting':
      return { ...state, connecting: true }
    case 'connected':
      return { ...state, connecting: false, connected: true }
    case 'closed':
      return { ...state, connecting: false, connected: false }
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
const useWebSocket = (url = 'ws://localhost:4567') => {
  const [state, dispatch] = useReducer(reducer, {
    message: [],
    error: null,
    loading: true,
  })
  const websocket = new WebSocket(url)

  const connectClient = async () => {
    dispatch({ type: 'get' })
    websocket.onopen = () => {
      dispatch({ type: 'connected' })
    }

    websocket.onmessage = evt => {
      dispatch({ type: 'message', payload: { data: evt.data } })
    }

    websocket.onclose = () => {
      dispatch({ type: 'closed' })
    }

    dispatch({ type: 'connecting', payload: {} })
  }

  useEffect(() => {
    connectClient()
  }, [])
  return { ...state }
}

export { useWebSocket }
export default useWebSocket
