import { useEffect, useState } from 'react'

/**
 * useFavicon Hook to allow setting of the favicon of a page
 *
 * @param {string} href - The href of the favicon
 * @returns {[string, function]} - The favicon href and setFavicon function to update favicon
 */
const useFavicon = href => {
  const [favicon, setFavicon] = useState(href)
  useEffect(() => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = favicon
    document.getElementsByTagName('head')[0].appendChild(link)
  }, [favicon])

  return [favicon, setFavicon]
}

export default useFavicon

export { useFavicon }
