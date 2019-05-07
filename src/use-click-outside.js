import { useLayoutEffect } from 'react'

const useClickOutside = (ref, handler = e => {}, when = true) => {
  const handle = e => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      handler(e)
    }
  }
  useLayoutEffect(() => {
    if (when) {
      document.addEventListener('click', handle)
      document.addEventListener('ontouchstart', handle)
      return () => {
        document.removeEventListener('click', handle)
        document.removeEventListener('ontouchstart', handle)
      }
    }
  }, [ref, handler, when])
}

export { useClickOutside }
export default useClickOutside
