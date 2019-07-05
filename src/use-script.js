import { useEffect } from 'react'

const useScript = src => {
  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = src
    document.getElementsByTagName('head')[0].appendChild(scriptTag)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(scriptTag)
    }
  }, [src])
}

export { useScript }

export default useScript
