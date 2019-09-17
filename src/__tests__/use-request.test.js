import { renderHook, act } from '@testing-library/react-hooks'
import { useRequest } from '../'

beforeEach(() => {
  fetch.resetMocks()
})
const JSON_CONTENT_TYPE = 'application/json'
test('should make a request', async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: '12345' }), {
    headers: {
      'Content-Type': JSON_CONTENT_TYPE,
    },
  })
  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest('https://httpstat.us/200')
  )

  expect(result.current.data).toStrictEqual([])
  act(() => {
    result.current.makeRequest()
  })

  await waitForNextUpdate()

  expect(result.current.data).toBe('12345')
})

test('should make handle error', async () => {
  fetch.mockResponse(
    JSON.stringify({ Error: 'The error that flaps in the night' }),
    { status: 500 }
  )

  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest('https://mock')
  )

  expect(result.current.data).toStrictEqual([])
  act(() => {
    result.current.makeRequest({
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    })
    result.current.makeRequest()
  })
  await waitForNextUpdate()

  expect(result.current.error).toBe(true)
})

test('should make handle error and return data if included in payload', async () => {
  fetch.mockResponse(
    JSON.stringify({
      items: ['item', 'item2'],
      Error: 'The error that flaps in the night',
    }),
    { status: 500 }
  )

  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest('https://httpstat.us/500')
  )

  expect(result.current.data).toStrictEqual([])
  act(() => {
    result.current.makeRequest({
      method: 'GET',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    })
    result.current.makeRequest()
  })
  await waitForNextUpdate()

  expect(result.current.error).toBe(true)
})

test('should make handle error text response', async () => {
  fetch.mockResponse('The error that flaps in the night', {
    status: 500,
    headers: {
      'Content-Type': 'text/plain',
    },
  })

  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest('https://httpstat.us/500')
  )

  expect(result.current.data).toStrictEqual([])
  act(() => {
    result.current.makeRequest({
      method: 'GET',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
    })
    result.current.makeRequest()
  })
  await waitForNextUpdate()

  expect(result.current.error).toBe(true)
})
