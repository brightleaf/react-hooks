import { useEffect, useState } from 'react'
/**
 * useTitle Hook to allow setting of the page title
 *
 * @param {string} pageTitle - The text to be used to set the page title
 * @returns {[string, function]} - The title and setTitle function
 */
const useTitle = pageTitle => {
  const [title, setTitle] = useState(pageTitle)
  useEffect(() => {
    document.title = title
  }, [title])

  return [title, setTitle]
}

export default useTitle

export { useTitle }
