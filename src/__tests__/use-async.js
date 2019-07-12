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
  console.log('result', result.current)
  expect(result.current.data).toBe(null)
  result.current.execute()
  await waitForNextUpdate()
  console.log('result', result.current)
  expect(result.current.data.complete).toBe(true)
})
