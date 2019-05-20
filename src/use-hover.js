import { useLayoutEffect, useState } from 'react'
/**
 * useHover hook that returns if an element is being hovered over
 *
 * @param {*} rel - The reference to the element to be observed
 * @returns {boolean} - The current state of the element if being hovered
 */
const useHover = rel => {
  const [hovered, setHover] = useState(false)
  useLayoutEffect(() => {
    const hoverEl = rel.current
    const onHover = () => setHover(true)
    const offHover = () => setHover(false)
    hoverEl.addEventListener('mouseover', onHover)
    hoverEl.addEventListener('mouseout', offHover)
    return () => {
      hoverEl.removeEventListener('mouseover', onHover)
      hoverEl.removeEventListener('mouseout', offHover)
    }
  }, [rel])
  return [hovered]
}

export default useHover

export { useHover }
