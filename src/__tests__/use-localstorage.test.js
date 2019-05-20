import { renderHook, act } from 'react-hooks-testing-library'
import { useLocalStorage } from '../'

test('should increment counter', () => {
  const { result } = renderHook(() => useLocalStorage('test', 'Test'))
  expect(result.current[0]).toBe('Test')
  act(() => result.current[1]('Bob'))

  expect(result.current[0]).toBe('Bob')
})
