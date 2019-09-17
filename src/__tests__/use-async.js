import { renderHook, act } from '@testing-library/react-hooks'
import { delay } from '@kev_nz/async-tools'
import { useAsync } from '../'

test('should execute async function', async () => {
  const asyncFun = async () => {
    await delay(50)
    return {
      complete: true,
    }
  }
  const { result, waitForNextUpdate } = renderHook(() => useAsync(asyncFun))

  expect(result.current.data).toBe(null)
  act(() => {
    result.current.execute()
  })
  await waitForNextUpdate()

  expect(result.current.data.complete).toBe(true)
})
