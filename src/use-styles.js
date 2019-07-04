import { useEffect } from 'react'

const useStyles = css => {
  useEffect(() => {
    const link = document.createElement('style')
    link.type = 'text/css'
    link.innerHTML = css
    document.getElementsByTagName('head')[0].appendChild(link)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(link)
    }
  }, [css])
}
export default useStyles

export { useStyles }
