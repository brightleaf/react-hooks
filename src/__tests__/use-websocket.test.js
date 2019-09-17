import WS from 'jest-websocket-mock'
import { renderHook, act } from '@testing-library/react-hooks'

import { useWebSocket } from '../'
const WS_URL = 'ws://localhost:1234'
const server = new WS(WS_URL)

afterAll(async () => {
  // server.close()
  // WS.clean()
})

test('should listen to web socket', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useWebSocket(WS_URL))

  act(() => {
    server.send('First Message')
  })
  await waitForNextUpdate()
  expect(result.current.message[0]).toBe('First Message')
})

test('should handle multiple messages', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useWebSocket(WS_URL))

  act(() => {
    server.send('hello everyone')
    server.send('hello again')
  })
  await waitForNextUpdate()

  expect(result.current.message[0]).toBe('hello everyone')
  expect(result.current.message[1]).toBe('hello again')
})
