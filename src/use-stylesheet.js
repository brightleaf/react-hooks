import { useEffect, useState } from 'react'

const useStyleSheet = href => {
  const [sheet, setSheet] = useState(href)
  useEffect(() => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = sheet
    document.getElementsByTagName('head')[0].appendChild(link)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(link)
    }
  }, [sheet])
  return [sheet, setSheet]
}

export { useStyleSheet }

export default useStyleSheet
