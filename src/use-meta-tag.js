import { useEffect, useState } from 'react'
/**
 * useTitle Hook to allow setting of the page title
 *
 * @param {string} key - The key to be used to set meta tag
 * @param {string} value - The value to be used in tag
 * @param {string} attribute - The attribute name to apply the key on the tag, defaults to name
 * @returns {[string, function]} - The title and setTitle function
 */
const useMetaTag = (key, value, attribute = 'name') => {
  const [metaValue, setMetaValue] = useState(value)
  useEffect(() => {
    const metaTag = document.querySelector(`meta[${attribute}="${key}"]`)
    if (!metaTag) {
      const meta = document.createElement('meta')
      meta.setAttribute(attribute, key)

      meta.content = metaValue

      document.getElementsByTagName('head')[0].appendChild(meta)
    } else {
      metaTag.setAttribute('content', metaValue)
    }
  }, [attribute, key, metaValue])

  return [metaValue, setMetaValue]
}

export default useMetaTag

export { useMetaTag }
