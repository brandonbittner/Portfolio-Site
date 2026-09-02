import { useRef, useEffect, useCallback } from 'react'
import styles from './LaptopScrollSection.module.css'

export default function LaptopScrollSection({ laptopSrc, pageSrc, pageAlt = 'Webpage screenshot' }) {
  const containerRef = useRef(null)
  const viewportRef  = useRef(null)
  const pageImgRef   = useRef(null)
  const offsetRef    = useRef(0)
  const canScrollRef = useRef(false)

  const getMax = useCallback(() => {
    const vp  = viewportRef.current
    const img = pageImgRef.current
    if (!vp || !img) return 0
    const imgH = img.getBoundingClientRect().height
    const vpH  = vp.getBoundingClientRect().height
    return Math.max(0, imgH - vpH)
  }, [])

  const isCentered = useCallback(() => {
    const el = containerRef.current
    if (!el) return false
    const rect = el.getBoundingClientRect()
    const containerCenter = rect.top + rect.height / 2
    const viewportCenter  = window.innerHeight / 2
    return Math.abs(containerCenter - viewportCenter) < 220
  }, [])

  useEffect(() => {
    const onWheel = (e) => {
      if (!isCentered()) {
        canScrollRef.current = false
        return
      }

      if (canScrollRef.current) return

      e.preventDefault()

      const max       = getMax()
      const newOffset = Math.max(0, Math.min(max, offsetRef.current + e.deltaY))

      if (newOffset === offsetRef.current) {
        canScrollRef.current = true
        return
      }

      offsetRef.current = newOffset
      if (pageImgRef.current) {
        pageImgRef.current.style.transform = `translateY(-${newOffset}px)`
      }

      if (newOffset <= 0 || newOffset >= max) {
        canScrollRef.current = true
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [isCentered, getMax])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.laptopWrapper}>
        <div ref={viewportRef} className={styles.screenViewport}>
          <img
            ref={pageImgRef}
            src={pageSrc}
            alt={pageAlt}
            className={styles.pageImg}
          />
        </div>
        <img src={laptopSrc} alt="Laptop mockup" className={styles.laptopImg} />
      </div>
    </div>
  )
}
