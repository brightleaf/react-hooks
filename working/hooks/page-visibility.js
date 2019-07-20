import React, { useEffect } from 'react'
import {
  usePageVisibility,
  useTitle,
  useFavicon,
} from '@brightleaf/react-hooks'
export default () => {
  useTitle('usePageVisibility example from @brightleaf/react-hooks')

  const { visible, hidden } = usePageVisibility()

  const [favicon, setFavicon] = useFavicon('brightleaf-on.png')

  useEffect(() => {
    if (hidden) {
      setFavicon('brightleaf-dim.png')
    } else if (visible) {
      setFavicon('brightleaf-on.png')
    }
  }, [visible, hidden, setFavicon])

  return (
    <div className="App content">
      <h2>
        {visible && 'Visible'}
        {hidden && 'Hidden'}
      </h2>
    </div>
  )
}
