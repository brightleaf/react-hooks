import { useEffect, useReducer } from 'react'
import Nes from '@hapi/nes/lib/client'

const reducer = (state, action, ...other) => {
  const messages = [].concat(state.messages)
  switch (action.type) {
    case 'connecting':
      return { ...state, connecting: true, connected: false }
    case 'connected':
      return { ...state, connecting: false, connected: true }
    case 'disconnected':
      return { ...state, connecting: false, connected: false }
    case 'message':
      messages.push(action.payload.data)
      return {
        ...state,
        messages,
        error: null,
        connecting: false,
      }
    case 'error':
      return {
        ...state,
        error: action.payload.error,
        connecting: false,
      }
    default:
      return state
  }
}
const useNes = (url = 'ws://localhost:4567', subscribe) => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    error: null,
    connecting: true,
    connected: false,
  })
  var client = new Nes.Client(url)

  useEffect(() => {
    const connectClient = async () => {
      dispatch({ type: 'connecting', payload: {} })
      return new Promise(async resolve => {
        client.onConnect = () => {
          dispatch({ type: 'connected' })
          return resolve()
        }
        client.onDisconnect = () => {
          dispatch({ type: 'disconnected' })
          return resolve()
        }
        await client.connect()

        client.onUpdate = update => {
          dispatch({ type: 'message', payload: { data: update } })
          return resolve()
        }

        if (subscribe) {
          client.subscribe(subscribe, update => {
            dispatch({ type: 'message', payload: { data: update } })
            return resolve()
          })
        }
      })
    }
    connectClient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatcher = message => {
    dispatch({ type: 'message', payload: { data: message } })
  }
  return { ...state, client, dispatcher }
}

export { useNes }
export default useNes
