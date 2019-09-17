import { useCallback, useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'connecting':
      return { ...state, connecting: true }
    case 'connected':
      return { ...state, connecting: false, connected: true }
    case 'closed':
      return { ...state, connecting: false, connected: false }
    case 'message':
      state.message.push(action.payload.data)
      return {
        ...state,
        message: state.message,
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

  const send = message => {
    if (websocket.readyState === WebSocket.OPEN) {
      websocket.send(message)
    } else {
      console.warn('The WebSocket is not ready')
      setTimeout(() => {
        send(message)
      }, 100)
    }
  }
  const connectClient = useCallback(() => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  useEffect(() => {
    connectClient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return {
    ...state,
    sendMessage: send,
  }
}

export { useWebSocket }
export default useWebSocket
