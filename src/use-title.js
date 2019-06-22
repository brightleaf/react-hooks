import { useEffect } from 'react'
/**
 * useTitle Hook to allow setting of the page title
 *
 * @param {string} title - The text to be used to set the page title
 */
const useTitle = title => {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default useTitle

export { useTitle }
