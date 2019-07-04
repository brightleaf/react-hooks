import { useEffect } from 'react'

const useStyleSheet = href => {
  useEffect(() => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = href
    document.getElementsByTagName('head')[0].appendChild(link)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(link)
    }
  }, [href])
}

export { useStyleSheet }

export default useStyleSheet
